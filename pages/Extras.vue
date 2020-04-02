<template>
  <div>
    <h1>Extras</h1>
    <v-card v-for="(track,name, index) in tracks" :key="index" class="trackName" text flat>
      <v-row>
        <!-- <v-card class="trackName" text flat> -->
        <!-- </v-card> -->
        <v-card-title>Track {{index+1}} - {{name}}</v-card-title>
      </v-row>
      <v-row v-if="track !== '{}'">
        <v-col v-for="(subTrack,name, j) in track" :key="j">
          <v-card class="trackCard" align="center" justify="center">
            {{name}}
            <v-row cols="12">
              <v-col lg="4" sm="3">
                <v-img :src="subTrack.img" width="50px"></v-img>
              </v-col>
              <v-col lg="8" sm="9">
                <a :href="subTrack.ref" target="_blank">{{ subTrack.name }}</a>

                <div v-for="(link,i) in subTrack.links" :key="i">
                  <a :href="link.ref" target="_blank">{{ link.name }}</a>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <h1>Even More</h1>
    <v-row>
      <v-col v-for="(link, index) in links" :key="index" cols="12" sm="6">
        <v-card class="linkCard">
          <a :href="link.ref" target="_blank">{{ link.title }}</a>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: require('@/assets/extras.json'),
      tracks: require('@/assets/tracks.json')
    }
  }
}
</script>

<style>
.linkCard,
.trackCard {
  padding: 1em;
  margin: 0.5em;
  margin: auto;
}

.trackCard {
  width: 20em;
  height: 8em;
}

.trackName {
  padding: 1em;
  margin: 0.5em;
  background-color: transparent !important;
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
