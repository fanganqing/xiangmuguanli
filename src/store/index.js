import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admins: 0
  },
  mutations: {
    setAdmins(state, val) {
      state.admins = val
    }
  },
  actions: {
  },
  modules: {
  }
})
