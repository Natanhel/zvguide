<template>
  <div>
    <v-layout
      column
      justify-center
      align-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <v-card>
          <v-card-title class="headline">
            {{ title }}
          </v-card-title>
          <v-card-text>
            <p>אלו הן התוכניות שתצטרכו על מנת לצלוח את החפיפה בשלום</p>
            <p>ראשית תצטרכו סביבת פיתוח</p>
            <p>
              הורידו מכאן את הגירסא העדכנית של <a
                href="https://code.visualstudio.com/"
                target="_blank"
              >
                <b>Visual Studio Code</b>
              </a>
            </p>
            <p>אציין שאין חובה להשתמש בסביבה הזו </p>

            <p />
            <p>
              בנוסף לכך אתם צריכים להתקין מנהל package-ים בשם <a
                href="https://nodejs.org/en/"
                target="_blank"
              >
                <b>node.js</b>
              </a>
            </p><p>זהו אתם מוכנים!</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  data () {
    return {
      title: 'Programs'
    }
  }
}
</script>

<style>
p {
    direction: rtl;
}
p,v-card-title,v-btn,
h1,h2,h3,h4,h5 {
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}
</style>
