
function interopDefault (promise) {
    return promise.then(m => m.default || m)
  }
  
const moesif = () => interopDefault(import('moesif-browser-js'))

export default {
    mounted() {
    },
    methods: {
        sendMoseifEvent(str, obj){            
            if (process.client) {
                moesif.init({
                applicationId: process.env.moesifAppId
                })
                moesif.track(str, obj)
            }
        }
    }
}