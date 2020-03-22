<template>
  <div>
    <v-flex>
      <v-btn color="primary" to="/courses">
        back
      </v-btn>
      <v-container row>
        <v-row align="center">
          <v-col class="text-center" cols="12" sm="8">
            <h2>
              {{ activeName }}
            </h2>
            <checklist :videos="videos" />
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
import Checklist from '@/components/Checklist.vue'
export default {
  components: {
    Checklist
  },
  data () {
    return {
      activeName: 'Vue Instance',
      src: 'https://player.vimeo.com/video/398745560',
      links: [],
      videos: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  mounted () {
    console.log('moumted' + this.$route.params.id)
    const importedVideos = []
    let parsed
    const {
      links,
      data
    } = require('@/assets/videos.json')[this.$route.params.id.toLowerCase()]
    data.forEach((e) => {
      parsed = e.name.toLowerCase().split(' ').join('_')
      try {
        const newName = e.name
        const dataTransform = {
          name: newName,
          parsedName: parsed,
          watched: false,
          src: 'https://player.vimeo.com/video/' + e.src
        }

        try {
          dataTransform.watched = (localStorage[parsed] === 'true')
          // console.log('updated ' + parsed + ' to ' + localStorage[parsed])
        } catch (error) {
          // console.log('no data in localStorage for ' + error.message)
          localStorage[parsed] = false
        }

        importedVideos.push(dataTransform)
      } catch (error) {
        // console.log(error.message)
      }
    })
    this.links = links
    this.videos = importedVideos
    const firstLoad = importedVideos[0]
    this.play(firstLoad)
  },
  methods: {
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
