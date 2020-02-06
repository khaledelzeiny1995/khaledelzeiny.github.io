import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueParticles from 'vue-particles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import VueRouter from 'vue-router'
import About from "./components/About"
import Home from "./components/Home"
import Experience from "./components/Experience"
import Contact from "./components/Contact"


Vue.use(VueRouter)
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


const router = new VueRouter({

  routes: 
  [
    {path:'/about' , component: About},
    {path:'/' , component: Home},
    {path:'/exp' , component:Experience},
    {path:'/contact', component:Contact}
  ],

  mode: 'history'
});

Vue.use(VueParticles)
Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
