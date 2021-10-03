import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      searchHistory:[],
      results:[]
  },
  mutations: {
      saveSearch(state, payload) {
        state.searchHistory.push(payload)
      },
      // create results mutation
      saveResults(state, payload) {
        state.results.push(payload)
        console.log('hello')
      }
  },
  actions: {
      saveSearch(context, payload) {
        context.commit('saveSearch', payload)
      },
      // create results action
      saveResults(context, payload) {
        context.commit('saveResults', payload)
      }
  },
  modules: {
  }
})
