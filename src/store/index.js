import Vue from 'vue'
import Vuex from 'vuex'
import Games from './games.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Games,
    opiniones: []
  },
  getters: {
  },
  mutations: {
    ADD_OPINION: (state, opinion) => {
      state.opiniones.push(opinion)
    }
  },
  actions: {
    add_opinion: ({commit}, opinion) => {
      commit('ADD_OPINION', opinion)
    }
  },
  modules: {
  }
})
