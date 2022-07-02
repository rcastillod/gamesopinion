import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import Games from './games.json'


Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
})

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
    },
    DELETE_OPINION: (state, id) => {
      let index = state.opiniones.findIndex( opinion => opinion.idOpinion == id )
      state.opiniones.splice(index, 1)
    },
    EDIT_OPINION: (state, opinion) => {
      let id = opinion[0]
      let nombre = opinion[1]
      let texto = opinion[2]

      let index = state.opiniones.findIndex(opinion => opinion.idOpinion === id)
      
      state.opiniones[index].nombre = nombre
      state.opiniones[index].opinionText = texto
    }
  },
  actions: {
    add_opinion: ({commit}, opinion) => {
      commit('ADD_OPINION', opinion)
    },
    delete_opinion: ({commit}, id) => {
      commit('DELETE_OPINION', id)
    },
    edit_opinion: ({commit}, opinion) => {
      commit('EDIT_OPINION', opinion)
    }
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
