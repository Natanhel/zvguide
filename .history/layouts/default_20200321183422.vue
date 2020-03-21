<template>
  <v-app dark>
    <v-dialog
      v-model="aboutMe"
      max-width="350"
    >
      <v-card>
        <v-card-title>About Me</v-card-title>
        <v-card-text>
          I graduated the Technion CS faculty at 2019
          with more than 3 years of experience coding
          back-end and front-end technologies
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
          vault of information for future self <v-icon>mdi-emoticon-cool-outlined</v-icon>
        </v-card-text>
        <v-card-action>
          <v-btn color="green" @click="aboutMe = !aboutMe">close</v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span @click="aboutMe = !aboutMe">&copy; {{ new Date().getFullYear() }} - Natanhel Poliszuk</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      aboutMe: false,
      clipped: false,
      drawer: false,
      fixed: false,
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
