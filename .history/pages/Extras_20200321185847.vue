<template>
  <div>
    <h1>Extras</h1>
    <v-card
      v-for="(link,index) in links"
      id="linkCard"
      :key="index"
    >
      <a
        :href="link.ref"
        target="_blank"
      >
        {{ link.title }}
      </a>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: require('@/assets/extras.json')
    }
  }
}
</script>

<style>
#linkCard{
    padding: 1em;
    margin: 0.5em;
}

</style>
