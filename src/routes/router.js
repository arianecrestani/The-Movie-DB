import Vue from 'vue';
import VueRouter from 'vue-router'
import Overview from '../pages/Overview.vue'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  }

]
const router = new VueRouter({
  mode:'history',
  routes
})
export default router