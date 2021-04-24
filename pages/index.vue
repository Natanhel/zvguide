<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vue.js ARMY guide
        </v-card-title>
        <v-card-text>
          <p>Vue.js is a JavaScript framework for front-end websites development</p>
          <p>We will be studying Vuetify and Nuxt.</p>
          <p>
            For more information on <b>Vue.js</b>, check out the <a
              href="https://vuejs.org"
              target="_blank"
            >
              documentation
            </a>.
          </p>
          <p>
            For more information on <b>Vuetify</b>, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
            >
              documentation
            </a>.
          </p>
          <p>
            For more information on <b>Nuxt</b>, check out the <a
              href="https://nuxtjs.org/"
              target="_blank"
            >
              documentation
            </a>.
          </p>
          <p>I wish you well on your studying and hope you would enjoy it as much as I do.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Natanhel Poliszuk</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/courses"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      aboutMe: false
    }
  },
  head () {
    return {
      title: 'ZV Guide'
    }
  }
}
</script>

<style>
p,v-card-title,v-btn,
h1,h2,h3,h4,h5 {
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}
* {
  --mint-cream: #f1fffaff;
  --tea-green: #ccfccbff;
  --celadon: #96e6b3ff;
  --middle-green: #568259ff;
  --ebony: #464e47ff; 

  /* background-color: var(--middle-green); */
}
</style>
