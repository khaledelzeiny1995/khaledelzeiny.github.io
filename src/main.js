import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueParticles from 'vue-particles'


// this is for the scroll reavel
import AOS from "aos"
import "aos/dist/aos.css"





Vue.use(VueParticles)
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  created()
  {
    AOS.init();
  },

  render: h => h(App),
}).$mount('#app')
