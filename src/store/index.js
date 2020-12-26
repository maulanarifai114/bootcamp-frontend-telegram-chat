import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: '+375(29)9638433',
    senderId: parseInt(localStorage.getItem('id')),
    receiverId: 0
  },
  mutations: {
    SET_RECEIVER (state, data) {
      state.receiverId = data
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
