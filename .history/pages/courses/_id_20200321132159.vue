/* eslint-disable vue/no-unused-components */
/* eslint-disable no-tabs */
<template>
  <div>
    <v-dialog
      v-model="checklistDialog"
      max-width="350"
    >
      <v-card
        rounded
      >
        <v-card-title>Course Checklist</v-card-title>
        <v-card
          v-for="v in videos"
          :key="v.name"
          flat
        >
          <v-checkbox
            :v-model="checklist[v.name.toLowerCase().split(' ').join('_')]"
            style="padding: 0em; padding-left: 2em; margin: 0em;"
            :label="v.name"
            @change="courseChange(v.name)"
          />
        </v-card>
        <v-card-action>
          <v-spacer />
          <v-btn
            color="blue"
            text
            rounded
            @click="checklistDialog = !checklistDialog"
          >
            Close
          </v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
    <v-flex>
      <v-btn to="/courses">
        back
      </v-btn>
      <v-container row>
        <v-row align="center">
          <v-col class="text-center" cols="12" sm="8">
            <h2>
              {{ activeName }}
              <v-btn icon color="blue" @click="checklistDialog = !checklistDialog">
                <v-icon>mdi-beaker-check</v-icon>
              </v-btn>
            </h2>
            <iframe
              :src="src"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            />
            <h4>Textual Help & Materials</h4>
            <div v-for="link in links" :key="link">
              <a :href="link">
                {{ link.split('/')[link.split('/').length-2].split('-').join(' ').split('vuemastery')[1] }}
              </a>
            </div>
            </v-dialog>
          </v-col>
          <v-col sm="4" xs="12" class="text-center">
            <v-card
              v-for="v in videos"
              :key="v.name"
              xs="12"
              sm="4"
              height="2em"
              class="lessons"
              @click="play(v)"
            >
              <h5>{{ v.name }}</h5>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'Vue Instance',
      src: 'https://player.vimeo.com/video/398745560',
      links: [],
      videos: [],
      checklistDialog: false,
      checklist: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  mounted () {
    const importedVideos = []
    const {
      // path,
      // level,
      links,
      data
    } = require('@/assets/videos.json')[this.$route.params.id.toLowerCase()]
    data.forEach((e) => {
      try {
        const newName = e.name
        const dataTransform = {
          name: newName,
          src: 'https://player.vimeo.com/video/' + e.src
        }
        importedVideos.push(dataTransform)
      } catch (error) {
        console.log(error.message)
      }
    })
    this.links = links
    this.videos = importedVideos
    const firstLoad = importedVideos[0]
    this.play(firstLoad)
    const checklistLoad = []
    data.forEach((e) => {
      // checklist loading from localstorage
      const parsedName = e.name.toLowerCase().split(' ').join('_')
      try {
        checklistLoad.push({ parsedName: localStorage[parsedName] })
      } catch (error) {
        console.log('no data in localStorage for ' + error.message)
        checklistLoad.push({ parsedName: false })
        localStorage[parsedName] = false
      }
    })
    this.checklist = checklistLoad
  },
  methods: {
    courseChange (name) {
      // save checklist change to local storage
      const parsedName = name.toLowerCase().split(' ').join('_')
      localStorage[parsedName] = this.checklist[parsedName]
    },
    play ({ name, src, links }) {
      this.src = src
      if (this.$route.params.id.includes('Trello')) {
        this.activeName = 'Watch Us Build a Trello Clone #' + name
      } else {
        this.activeName = name
      }
    }
  },
  head () {
    return {
      title: 'ZH Guide - ' + this.$route.params.id.split('_').join(' ')
    }
  },
  generate: {
    fallback: '/courses/'
  }
}
</script>

<style>
.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.lessons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
}
body {
    margin: 0;
    padding: 0;
}

iframe {
    display: block;
    width: 100vw;
    max-width: 100%;
    height: 50vh;
    margin: 0;
    padding: 0;
    border: 0 none;
    box-sizing: border-box;
}

</style>
