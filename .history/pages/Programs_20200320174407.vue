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
            <p> אבל למי שבכל זאת מחליט להשתמש בה, הנה כמה בונוסים:</p>

            <a
              href="https://code.visualstudio.com/docs/languages/javascript#_intellisense"
              target="_blank"
            >
              <h4>intellisense</h4>
            </a>

            <a
              href="https://code.visualstudio.com/docs/editor/intellisense#_tab-completion"
              target="_blank"
            >
              <h4>Auto tab complete</h4>
            </a>

            <a
              href="https://code.visualstudio.com/docs/editor/refactoring"
              target="_blank"
            >
              <h4>VSCode refactoring</h4>
            </a>
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
// Called to know which transition to apply
  transition (to, from) {
    if (!from) { return 'slide-left' }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
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
</style>
