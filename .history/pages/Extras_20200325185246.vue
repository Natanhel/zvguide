<template>
  <div>
    <h1>Extras</h1>
    <v-row>
      <v-col
        v-for="(link,index) in links"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-card class="linkCard">
          <a
            :href="link.ref"
            target="_blank"
          >
            {{ link.title }}
          </a>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: require("@/assets/extras.json")
    };
  }
};
</script>

<style>
#linkCard {
  padding: 1em;
  margin: 0.5em;
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
