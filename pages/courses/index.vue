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
            <p class="get-pass">כדי לקבל סיסמא יש ליצור קשר במייל natanhelp@gmail.com עם הכותרת VueARMYGuide</p>
            <v-btn @click="checkPWD">כנס</v-btn>
          </v-card>
        </v-card>
      </v-flex>
    </div>
    
    <div v-if="!welcomeCard" class="filter-containr">
      <div class="filter-button" v-for="f in filters" :key="f.text" @click="changeFilterFunction(f.function, f.text)">{{f.text}}</div>
    </div>
    <courses-list v-if="!welcomeCard" :items="courses"/>
  </v-layout>
</template>

<script>
import bcrypt from 'bcryptjs'

// // Load bcrypt hash
const hashCheck = '$2a$10$DXUgf/bl8dHgCfeEEPhOD.E/CDz/5OwXxQ114X5LViNj6obb2jIEC'
// function interopDefault (promise) {
//     return promise.then(m => m.default || m)
//   }
  
// const moesif = () => interopDefault(import('moesif-browser-js'))

export default {
  components: {
    CoursesList: () => import(/* webpackPrefetch: true */ '@/components/CoursesList')
  },
  data () {
    return {
      pwd: '',
      welcomeCard: true,
      idGenerator: 1,
      videos: require('assets/videos.json'),
      filterFunc: e => e,
      filters: [
          'All Courses',
          'Beginner',
          'Intermediate',
          'Advanced',
          'Vue 3'        
      ]
    }
  },
  computed: {
    courses () {
      let categories = [
          'Beginner',
         'Intermediate',
         'Advanced'
      ]
      return categories.map((levelName) => {   
        const level = {     
          header: true,
          children: [],
          Name: levelName
        }
        Object.keys(this.videos).forEach(v => {
          const videoObject = this.videos[v]
          if(videoObject.level === level.Name)
            level.children.push({
              Name: videoObject.path,
              VideosNumber: videoObject.data.length
            })
        })
        return level
      })
      .filter(this.filterFunc)
    }
  },
  mounted () {
    this.createFilterFunctions()
      var skipPwd = localStorage.getItem(hashCheck)
      if (skipPwd === 'false'){
        this.welcomeCard = false
        localStorage[hashCheck] = false
      }
  },
  methods: {
    changeFilterFunction(func, filterName){
      this.filterFunc = func
      this.sendMoesifEvent(`Used Filter - ${filterName}`,{})
    },
    createFilterFunctions(){
      this.filters = this.filters.map(fName => {
        if (fName === 'All Courses') 
          return {
            text: fName,
            function: c => c
          }
        if(fName === 'Vue 3') {
          return {
            text: fName,
            function: c => {
              c.children = c.children.filter(child => child.Name.toUpperCase().includes(fName.toUpperCase()))
              return c.children.length > 0
            }
          }
        }
        return {
          text: fName,
          function: c => c.Name === fName
        }
      })
    },
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
      if (!bcrypt.compareSync(this.pwd, process.env.HASHED_PASS)) { return }
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

.get-pass {
  font-size: 0.75rem; 
  direction: rtl;
}

.filter-containr{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

.filter-button {
  

  /* --mint-cream: #f1fffaff;
  --tea-green: #ccfccbff;
  --celadon: #96e6b3ff;
  --middle-green: #568259ff;
  --ebony: #464e47ff;  */

  margin: 0.5rem;
  cursor: pointer;
  background: #f1fffaff;
  color:  #464e47ff;
  font-weight: bold;
  padding: 0.75rem;
  border-radius: 50px;
  transition: .1s all;
}

.filter-button:hover{
  transform: scale(1.2);
  transition: .3s all;
}
</style>
