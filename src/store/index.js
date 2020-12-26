import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: '+375(29)9638433',
    senderId: parseInt(localStorage.getItem('id')),
    receiverId: 0,
    imgF: '',
    img: 'https://www.seekpng.com/png/full/17-171006_mother-png-transparent-picture-mothers-day-clipart-png.png'
  },
  mutations: {
    SET_RECEIVER (state, data) {
      state.receiverId = data
    },
    SET_IMG_FRIEND (state, data) {
      state.imgF = data
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
