<template>
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
      <!-- <v-card-action> -->
      <v-spacer />
      <v-btn
        color="blue"
        text
        rounded
        @click="checklistDialog = !checklistDialog"
      >
        Close
      </v-btn>
      <!-- </v-card-action> -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  data () {
      return {
          videosData: this.videos
      }
  }
}
</script>
