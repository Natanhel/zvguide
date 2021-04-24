<template>
  <div>
    <v-flex>
      <v-btn color="primary" to="/courses">back</v-btn>
      <div class="video-grid">
          <div class="video-header">
            <h1>{{ this.$route.params.id.split('_').join(' ') }}</h1>
            <h2>{{ activeName }}</h2>
            <checklist :videos="videos" />
          </div>
          <div class='empty-area'></div>

          <div class='video-container'>
            <iframe :src="src" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />            
          </div>

          <div v-if="typeof links !== 'undefined' && links.length > 0" class='video-links'>
            <h4 >Textual Help & Materials</h4>
            <div v-for="link in links" :key="link">
              <a
                :href="link"
              >{{ link.split('/')[link.split('/').length-2].split('-').join(' ').split('vuemastery')[1] }}</a>
            </div>
          </div>
        <div class="course-list-container">
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
        </div>
      </div>
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
      activeName: '',
      src: '',
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
    // console.log('moumted ' + this.$route.params.id)
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
          src: `https://player.vimeo.com/video/${e.src}`
        }

        this.sendMoseifEvent('Watching Video',{
          video_src: e.src,
          video_link: dataTransform.src,
          video_name: newName
        })

        try {
          dataTransform.watched = (localStorage[parsed] === 'true')
        } catch (error) {
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
    play({ name, src }) {
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
.lessons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
}

iframe {
  display: block;
  width: 100vw;
  max-width: 100%;
  height: 60vh;
  margin: 0;
  padding: 0;
  border: 0 none;
  box-sizing: border-box;
}

.video-header{
  grid-area: video-header;  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-container{
  grid-area: video-container;
  height: 100%; width: 100%;
}

.video-links{
  grid-area: video-links;  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course-list-container{
  grid-area: course-list-container;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.video-grid{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas:  'video-header video-header video-header'
                        'video-container video-container course-list-container'
                        'video-container video-container course-list-container'
                        'video-links video-links video-links';
}

.empty-area{
  grid-area: empty-area;
  width: 100%;
}

@media screen and (max-width: 980px){
  .video-grid{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:  'video-header video-header video-header'
                          'video-container video-container video-container'
                          'video-links video-links video-links'
                          'course-list-container course-list-container course-list-container';
  }

  .video-links{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
