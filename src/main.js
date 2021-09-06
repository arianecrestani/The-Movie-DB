import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./index.css"

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
// Vue.use(store)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
