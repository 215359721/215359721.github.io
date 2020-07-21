import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Head from './header'
import Foot from './footer'
import Info from './info'
import Home from './home'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:per',
    name: 'home',
    component: Home
  },
  {
    path: '/header',
    name: 'header',
    component: Head
  },
  {
    path: '/footer',
    name: 'footer',
    component: Foot,
    // redirect: { name: 'info' },
    alias: '/info'
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
