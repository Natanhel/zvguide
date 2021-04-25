const mixin = {
    methods: {
        sendMoesifEvent(str, obj){   
            const host = window.location.host.split(':')[0]
            if (!host.includes('localhost') && process.client) {
                const moesif = require('moesif-browser-js')
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
