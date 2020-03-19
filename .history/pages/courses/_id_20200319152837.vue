/* eslint-disable vue/no-unused-components */
/* eslint-disable no-tabs */
<template>
  <div>
    <v-flex class="video">
      <v-container row>
        <v-card>
          <v-card-title>{{ activeName }}</v-card-title>

          <v-flex xs12 xl8>
            <iframe
              :src="src"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            />
          </v-flex>
        </v-card>

        <v-layout column>
          <v-flex v-for="v in videos" :key="v.name" xs12 xl4>
            <v-btn width="20em" @click="play(v)"  class="lessons">
              <h5 >{{ v.name }}</h5>
            </v-btn>
          </v-flex>
        </v-layout>
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
      videos: []
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
    this.videos = importedVideos
    const firstLoad = importedVideos[0]
    this.play(firstLoad)
  },
  methods: {
    play ({ name, src }) {
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
      title: 'Vue.js course',
      meta: [
        {
          hid: 'index',
          name: 'name'
        }
      ]
    }
  },
  generate: {
    fallback: true
  }
}
</script>

<style>
.video-container {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0.5em;
}

.lessons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
}

</style>
