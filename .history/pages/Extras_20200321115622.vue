<template>
  <div>
    <h1>Extras</h1>
    <v-card class="link-card">
      <a v-for="link in links" :key="link" :href="link">link</a>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: ['https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf']
    }
  }
}
</script>

<style>
.link-card{
    padding: 1em;
    margin: 0.5em;
}
</style>
