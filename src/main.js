import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueParticles from 'vue-particles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(VueParticles)
Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
