import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
        
// this is for the scroll reavel
import AOS from "aos"
import "aos/dist/aos.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'





Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  created()
  {
    AOS.init();
  },

  render: h => h(App),
}).$mount('#app')
