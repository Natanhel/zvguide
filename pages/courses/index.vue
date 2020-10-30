<template>
  <v-layout column>
    <!-- <transition name="fade" mode="out-in"> -->
    <div v-if="welcomeCard">
      <v-flex class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-flex>
      <v-flex>
        <v-card class="welcome-card">
          <p class="heb-welcome">ברוכים הבאים לחפיפת Vue!</p>
          <p class="heb-welcome">לפניכם שלוש רמות קושי: מתחיל, בינוני, מתקדם</p>
          <p class="heb-welcome">לכל רמת קושי קיימים כמה קורסים</p>
          <p class="heb-welcome">כל קורס אורך בין חצי שעה לשעה וחצי</p>
          <p
            class="heb-welcome"
          >כמו כן, לומדים הכי טוב אם מתרגלים ולכן, מומלץ בחום להוריד את הסביבה אליכם למחשב ולכתוב קוד</p>
          <p class="heb-welcome">בהצלחה!</p>
          <p class="heb-welcome">אם אתם מוצאים בעיה כלשהי בלינקים יש ליצור קשר עם נתנאל</p>
          <v-card width="30vw" flat>
            <v-text-field
              v-model="pwd"
              type="password"
              color="white"
              outlined
              dense
              placeholder="הזן סיסמא כאן"
              @keypress="enterWasPressed"
            />
            <v-btn @click="checkPWD">כנס</v-btn>
          </v-card>
        </v-card>
      </v-flex>
    </div>
    <courses-list v-if="!welcomeCard" :items="items"/>
  </v-layout>
</template>

<script>
import bcrypt from 'bcryptjs'

// Load bcrypt hash
const hash = '$2y$12$6GlkOUy5fkAqY7HlJ3fcreSs93ehajrPf9D4wBgtkfLUP/Yh/rxvW'
const hashCheck = '$2y$12$z4lGcLU4sC0VUPfa/T8OWOwI92Rcy01mNuQesYN.D8CPNUs1O7zje'

export default {
  components: {
    CoursesList: () => import(/* webpackPrefetch: true */ '@/components/CoursesList')
  },
  data () {
    return {
      pwd: '',
      welcomeCard: true,
      items: [
        {
          id: 1,
          Name: 'Beginner',
          header: true,
          children: [
            { id: 2, Name: 'Intro to Vue.js' },
            { id: 3, Name: 'Real World Vue.js' },
            { id: 4, Name: 'Mastering Vuex' },
            { id: 5, Name: 'Next Level Vue' },
            { id: 6, Name: 'Watch Us Build a Trello Clone' }
          ]
        },
        {
          id: 7,
          Name: 'Intermediate',
          header: true,
          children: [
            { id: 8, Name: 'Animating Vue' },
            { id: 9, Name: 'Unit Testing' },
            { id: 10, Name: 'Token Based Authentication' },
            { id: 11, Name: 'Scaling Vue with Nuxt.js' },
            { id: 12, Name: 'Beautify with Vuetify' }
          ]
        },
        {
          id: 13,
          Name: 'Advanced',
          header: true,
          children: [
            { id: 14, Name: 'Component Design Patterns' },
            { id: 15, Name: 'Vue 3 Essentials' },
            { id: 16, Name: 'Vue 3 Reactivity' },
            { id: 17, Name: 'Advanced Components' },
            { id: 17, Name: 'Vue 3 Deep Dive with Evan You' },
            { id: 18, Name: 'From Vue 2 to Vue 3' }
          ]
        }
      ]
    }
  },
  mounted () {
    try {
      var skipPwd = localStorage.getItem(hashCheck)
      if (skipPwd === 'false'){
        this.welcomeCard = false
        localStorage[hashCheck] = false
      }
      
    } finally {
      // console.log('nope');      
    }
  },
  methods: {
    enterWasPressed (e) {
      if (e.keyCode === 13) {
        this.checkPWD()
      }
    },
    getTutorial (name) {
      return '/courses/exercise/' + name.split(' ').join('_')
    },
    checkPWD() {
      // eslint-disable-next-line handle-callback-err
      if (!bcrypt.compareSync(this.pwd, hash)) { return }
      this.welcomeCard = !this.welcomeCard      
      localStorage[hashCheck] = false
    }
  },
  head () {
    return {
      title: 'ZH Guide - Courses'
    }
  },
  generate: {
    fallback: 'courses'
  }
}
</script>

<style scoped>
.heb-welcome {
  direction: rtl;
}

.welcome-card {
  padding: 1em;
}

</style>
