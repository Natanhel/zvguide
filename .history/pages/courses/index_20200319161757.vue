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
            <p>ברוכים הבאים לחפיפת Vue!</p>
            <p>לפניכם שלוש רמות קושי: מתחיל, בינוני, מתקדם</p>
            <p>לכל רמת קושי קיימים כמה קורסים</p>
            <p>כל קורס אורך בין חצי שעה לשעה וחצי</p>
            <p>כמו כן, לומדים הכי טוב אם מתרגלים ולכן, מומלץ בחום להוריד את הסביבה אליכם למחשב ולכתוב קוד</p>
            <p>בהצלחה!</p>
            <p>אם אתם מוצאים בעיה כלשהי בלינקים יש ליצור קשר עם נתנאל</p>
            <v-text-field
              v-model="pwd"
              hint="הכנס סיסמא"
              type="password"
              color="white"
              outlined
              shaped
            />
            <v-btn
              @click="staggerOn">
              כנס
            </v-btn>
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
export default {
  components: {
  },
  data () {
    return {
      pwd: '',
      welcomeCard: false,
      items: [
        {
          id: 1,
          Name: 'Beginner',
          header: true,
          children: [
            { id: 2, Name: 'Intro to Vue.js' },
            { id: 3, Name: 'Real World Vue.js', locked: true },
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
    const firstTime = localStorage.welcome_msg
    if (firstTime === true) {
      this.welcomeCard = false
      // localStorage.welcome_msg = false
    } else {
      this.welcomeCard = true
      localStorage.welcome_msg = true
    }
  },
  methods: {
    getName (name) {
      return '/courses/' + name.split(' ').join('_')
    },
    staggerOn () {
      if (this.pwd !== '2020zahal') { return }
      this.welcomeCard = !this.welcomeCard
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
      title: 'Vue.js course',
      meta: [
        {
          hid: 'index',
          name: ''
        }
      ]
    }
  },
  generate: {
    fallback: true
  }
}
</script>

<style scoped>
p {
  direction: rtl;
}

.v-treeview{
  direction: rtl;
}

.lesson-card{
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

.level{
  padding: 1em;
  width: 100%;
  margin: 1em;
  direction: rtl;
}
</style>
