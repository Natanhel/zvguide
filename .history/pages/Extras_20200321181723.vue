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
      links: [
        {
          ref: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
          title: 'Vue Essentials - Cheat Sheet'
        },
        {
          ref: 'https://www.crockford.com/',
          title: 'Dougles Crockford'
        },
        {
          ref: 'https://www.medium.com/',
          title: 'Medium'
        },
        {
          ref: 'https://ditto-cp.sourceforge.io/',
          title: 'Ditto - Clipboard Manager'
        }
      ]
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
