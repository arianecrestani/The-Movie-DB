import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Overview from '../pages/Overview.vue'


const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
