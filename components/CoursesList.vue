<template>
    <div>            
        <div v-for="(card,index) in items" :key="index">
        <h2>{{ card.Name }}</h2>
        <v-divider />
            <v-container row fluid style="justify-content: space-evenly;">
                <v-card
                v-for="(child,index) in card.children"
                :key="index"
                class="lesson-card"
                align="center"
                justify="center"
                fill-height
                text
                :disabled="child.locked"
                >
                {{index+1}}
                <br />
                <v-card flat :to="getName(child.Name)">
                    <h3>{{ child.Name }}</h3>
                </v-card>
                <!-- <v-divider/>
                <v-card flat
                :to="getTutorial(child.Name)"
                text>
                    <h5>Exercise</h5>
                </v-card>-->
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script>

import gsap from 'gsap'
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
    },
    mounted() {
        setTimeout(() => {
        }, 1000)
        gsap.from('.lesson-card', {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 200,
        ease: 'power1',
        stagger: 0.1
        }, '<.5')
    },
    methods: {
        getName(name){
            return '/courses/' + name.split(' ').join('_').split('.')[0]
        }
    }
}
</script>

<style scoped>
.lesson-card {
  padding: 1em;
  margin: 1em;
  width: 20em;
}

.courses-enter {
  opacity: 0;
}

.courses-enter-active {
  transition: opacity 0.5s ease-out;
}
</style>