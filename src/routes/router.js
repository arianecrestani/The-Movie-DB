import Vue from 'vue';
import VueRouter from 'vue-router'
import MovieDetail from '../pages/MovieDetail.vue'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movieDetail',
    name: 'Movie Detail',
    component: MovieDetail
  }

]
const router = new VueRouter({
  mode:'history',
  routes
})
export default router