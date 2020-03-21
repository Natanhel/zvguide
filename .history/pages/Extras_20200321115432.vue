<template>
  <div>
    <h1>Extras</h1>
    <v-card>
      <a v-for="link in links" :key="link" :href="link" />
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
