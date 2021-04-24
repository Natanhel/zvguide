
function interopDefault (promise) {
    return promise.then(m => m.default || m)
  }
  
const moesif = () => interopDefault(import('moesif-browser-js'))

const mixin = {
    mounted() {
    },
    methods: {
        sendMoesifEvent(str, obj){            
            if (process.client) {
                moesif.init({
                applicationId: process.env.moesifAppId
                })
                moesif.track(str, obj)
            }
        }
    }
}

import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin(mixin) // Set up your mixin then
}
