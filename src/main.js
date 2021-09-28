import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes/router'


Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios)
// Vue.use(store)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
