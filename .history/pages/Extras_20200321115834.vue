<template>
  <div>
    <h1>Extras</h1>
    <v-card class="linkCard">
      <a v-for="link in links" :key="link" :href="link">link</a>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          ref: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
          title: 'Vue Essentials - Cheat Sheet'
        }
      ]
    }
  }
}
</script>

<style>
.linkCard{
    padding: 1em;
    margin: 0.5em;
}
</style>
