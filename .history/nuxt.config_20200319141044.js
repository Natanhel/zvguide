import colors from 'vuetify/es5/util/colors'

export default {
  srcDir: '.',
  buildDir: 'functions/.nuxt',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: 'AIzaSyBKvSDcIMdg1eLfAPBfaPEBr3WVTeDZLJQ',
        authDomain: 'zvguide.firebaseapp.com',
        databaseURL: 'https://zvguide.firebaseio.com',
        projectId: 'zvguide',
        storageBucket: 'zvguide.appspot.com',
        messagingSenderId: '185817579889',
        appId: '1:185817579889:web:c0c1fba4b20aef6d63f6d0',
        measurementId: 'G-NRWKE8NHB7'
      },
      services: {
        hosting: true, // Just as example. Can be any other service.
        ssr: {
          // !! NEVER deploy a service account file to github or to a publicly accessible folder on your server !!
          credential: '~/assets/firebase/serviceAccount.json',
          ignorePaths: [
            '/api/',
            '/[^/]+/sub-path\\//'
          ],
          // Experimental Feature, use with caution.
          serverLogin: {
            sessionLifetime: 60 * 60 * 1000 // one hour
          }
        }
      }
    }
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
