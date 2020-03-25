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
          v-for="v in videosData"
          :key="v.name"
          flat
        >
          <v-checkbox
            v-model="v.watched"
            style="padding: 0em; padding-left: 2em; margin: 0em;"
            :label="v.name"
            @change="courseChange(v)"
          />
        </v-card>
        <v-spacer />
        <v-btn
          color="primary"
          text
          rounded
          @click="checklistDialog = !checklistDialog"
        >
          Close
        </v-btn>
      </v-card>
    </v-dialog>

    <v-btn icon color="primary" @click="checklistDialog = !checklistDialog">
      <v-icon>mdi-beaker-check</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true
    },
    dialog: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      videosData: this.videos,
      checklistDialog: this.dialog
    }
  },
  // mounted () {
  //   console.log('mounteed checklist')
  // },
  updated () {
    this.videosData = this.videos
  },
  methods: {
    courseChange (video) {
      // save checklist change to local storage
      localStorage[video.parsedName] = video.watched
      // console.log('Local Storage updates: ' + video.parsedName + ' to value: ' + localStorage[video.parsedName])
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
</style>
