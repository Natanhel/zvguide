<template>
  <v-app dark>
    <v-dialog v-model="aboutMe" max-width="450">
      <v-card>
        <v-card-title>About Me</v-card-title>
        <v-card-text>
          I graduated the Technion CS faculty at 2019
          with more than 3 years of experience coding
          industrial back-end and front-end technologies
        </v-card-text>

        <v-card-text>
          I enjoy cooking, music, aquascaping, web surfing,
          chess, solving riddles and building new projects
        </v-card-text>

        <v-card-text>
          This website was built within 2 days period
          with the help of Nuxt.js, Vue.js and Heroku
          for hosting services
        </v-card-text>

        <v-card-text>
          Most of what you see in the web here
          is a hoarding symptom I have about knowledge and
          it was carefully designed in order to provide a
          vault of information for future self
          <v-icon>mdi-emoticon-cool-outline</v-icon>
        </v-card-text>
        <v-card-text>(and for the sake of info-sharing as well)</v-card-text>
        <v-card-text>
          <a rel="stylesheet" href="https://github.com/Natanhel" target="_blank">My GitHub page</a>
        </v-card-text>
        <v-card-text>Here's a nerdy chuck norris joke using Axios:</v-card-text>
        <v-card-text>{{joke}}</v-card-text>
        <v-card-action>
          <v-btn class="closeBtn" color="primary" @click="aboutMe = !aboutMe">close</v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      :app="showNav"
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon v-show="showNav" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <transition name="fade">
          <nuxt />
        </transition>
      </v-container>
    </v-main>
    <v-footer :fixed="fixed" app>
      <span @click="popUp">&copy; {{ new Date().getFullYear() }} - Natanhel Poliszuk</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
function interopDefault (promise) {
  return promise.then(m => m.default || m)
}
const moesif = () => interopDefault(import('moesif-browser-js'))
export default {

  name: 'Default',
  computed: {
    showNav () {
      return this.$router.currentRoute.name.toLowerCase() !== 'extrasteams'
    }
  },
  mounted() {
    this.getJoke()
    this.moseifUserLoadedPage()
  },
  methods: {
    moseifUserLoadedPage(){
      
    const host = window.location.host.split(':')[0]
    if (!host.includes('localhost')) {
      moesif.init({
        applicationId: process.env.moesifAppId
      })
      this.$axios('https://www.cloudflare.com/cdn-cgi/trace')
        .then(({ data }) => {
          moesif.track('First page load', {
            userIP: data.split('\n').filter(e => new RegExp(/ip=[0-9]+.[0-9]+.[0-9]+.[0-9]+/).test(e))[0].split('=')[1],
            host
          })
        })
      }
    },
    popUp(){
      this.getJoke()
      this.aboutMe = !this.aboutMe
    },
    async getJoke(){
      try {
        var { request: {
          response
        } } = await axios.get('https://api.icndb.com/jokes/random?escape=javascript&limitTo=[nerdy]')
        var { value: { joke } } = JSON.parse(response)
        this.joke = joke
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  data () {
    return {
      aboutMe: false,
      clipped: false,
      drawer: false,
      fixed: false,
      joke: '',
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Courses',
          to: '/courses'
        },
        {
          icon: 'mdi-chat',
          title: 'WhatZapp Clone',
          to: '/whatzapp'
        },
        {
          icon: 'mdi-apps',
          title: 'Programs',
          to: '/programs'
        },
        {
          icon: 'mdi-plus',
          title: 'Extras',
          to: '/extras'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vue.js ARMY Guide'
    }
  }
}
</script>

<style scoped>
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.closeBtn {
  padding: 1em;
  margin: 1em;
}
</style>
