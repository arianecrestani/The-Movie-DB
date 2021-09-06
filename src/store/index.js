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
      saveSearch(state, payload) {
          state.searchHistory.push(payload)
      }
  },
  actions: {
      saveSearch(context, payload) {
        context.commit('saveSearch', payload)
      }
  },
  modules: {
  }
})
