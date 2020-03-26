<template>
  <v-layout column>
    <transition name="fade" mode="out-in">
      <div v-show="welcomeCard">
        <v-flex class="text-center">
          <img src="/v.png" alt="Vuetify.js" class="mb-5">
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
            <p class="heb-welcome">
              ברוכים הבאים לחפיפת Vue!
            </p>
            <p class="heb-welcome">
              לפניכם שלוש רמות קושי: מתחיל, בינוני, מתקדם
            </p>
            <p class="heb-welcome">
              לכל רמת קושי קיימים כמה קורסים
            </p>
            <p class="heb-welcome">
              כל קורס אורך בין חצי שעה לשעה וחצי
            </p>
            <p class="heb-welcome">
              כמו כן, לומדים הכי טוב אם מתרגלים ולכן, מומלץ בחום להוריד את הסביבה אליכם למחשב ולכתוב קוד
            </p>
            <p class="heb-welcome">
              בהצלחה!
            </p>
            <p class="heb-welcome">
              אם אתם מוצאים בעיה כלשהי בלינקים יש ליצור קשר עם נתנאל
            </p>
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
              <v-btn
                @click="staggerOn"
              >
                כנס
              </v-btn>
            </v-card>
          </v-card>
        </v-flex>
      </div>
    </transition>
    <transition name="courses" mode="out-in">
      <div v-show="!welcomeCard">
        <div v-for="(card,index) in items" :key="index">
          <h2>{{ card.Name }}</h2>
          <v-divider />
          <v-container row fluid style="justify-content: space-evenly;">
            <v-card
              v-for="child in card.children"
              :key="child.id"
              class="lesson-card"
              align="center"
              justify="center"
              fill-height
              text
              :disabled="child.locked"
              :to="getName(child.Name)"
            >
              {{ child.Name }}
            </v-card>
          </v-container>
        </div>
      </div>
    </transition>
  </v-layout>
</template>

<script>
import gsap from 'gsap'
import bcrypt from 'bcryptjs'
export default {
  components: {
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
            { id: 17, Name: 'Advanced Components' }
          ]
        }
      ]
    }
  },
  mounted () {
    // console.log('mounted courses index')
    if (localStorage.correct_password === 'true') {
      this.welcomeCard = false
    }
  },
  methods: {
    enterWasPressed (e) {
      if (e.keyCode === 13) {
        this.staggerOn()
      }
    },
    getName (name) {
      return '/courses/' + name.split(' ').join('_')
    },
    staggerOn () {
      // Load bcrypt hash
      const hash = '$2y$12$6GlkOUy5fkAqY7HlJ3fcreSs93ehajrPf9D4wBgtkfLUP/Yh/rxvW'
      // eslint-disable-next-line handle-callback-err
      if (!bcrypt.compareSync(this.pwd, hash)) { return }
      this.welcomeCard = !this.welcomeCard
      localStorage.correct_password = true
      setTimeout(() => {
      }, 1000)
      gsap.from('.lesson-card', {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 200,
        ease: 'power1',
        stagger: 0.1
      }, '<.5')
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

.v-treeview {
  direction: rtl;
}

.lesson-card {
  padding: 1em;
  margin: 1em;
  width: 10em;
  height: 5em;
}

.welcome-card {
  padding: 1em;
}

.fade-leave-to,
.courses-enter {
  opacity: 0;
}

.fade-leave-active,
.courses-enter-active {
  transition: opacity 0.5s ease-out;
}

.level {
  padding: 1em;
  width: 100%;
  margin: 1em;
  direction: rtl;
}

p,
v-card-title,
v-btn,
h1,
h2,
h3,
h4,
h5 {
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}
</style>
