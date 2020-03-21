<template>
  <div>
    <h1>Extras</h1>
    <v-card class="linkCard">
      <a v-for="(link,index) in links" :key="index" :href="link.ref">
        {{ link.title }}
      </a>
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
