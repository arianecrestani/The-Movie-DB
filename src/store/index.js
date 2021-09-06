import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      searchHistory: [
          "test"
      ]
  },
  mutations: {
  },
  actions: {
      saveSearch(context, payload) {
          console.log(payload)
      }
  },
  modules: {
  }
})
