import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      searchHistory: [],
      selectedSearch: "",
  },
  mutations: {
      saveSearch(state, payload) {
          state.searchHistory.push(payload)
      },
      setResult (state, payload) {
        state.selectedSearch = payload;
      }
  },
  actions: {
      saveSearch(context, payload) {
        context.commit('saveSearch', payload)
      },
      setResult(context, payload) {
        context.commit('setResult', payload)
      }
  },
  modules: {
  }
})
