<template>
    <div>
      <v-btn color="primary" to="/courses">
        back
      </v-btn>
        <h1>Exercise - {{ this.$route.params.id.split('_').join(' ') }}</h1>
        
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
                <v-card direction="rtl">
                    <v-card-title>תרגול</v-card-title>
                    <v-card-text>המשימה שלכם</v-card-text>
                    <v-card-text
                    flat
                    v-for="(ex,index) in exs"
                    :key="index"
                    >
                    {{ex}}
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exs: require('@/assets/tutorials.json')[this.$route.params.id.toLowerCase()]
        }
    },
}
</script>

<style scoped>
p,
v-card-text {
  direction: rtl;
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