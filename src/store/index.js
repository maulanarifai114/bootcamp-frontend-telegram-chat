import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // My Profile (Sender)
    senderId: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    fullName: '',
    username: '',
    phone: '+62',
    bio: '',
    img: '',
    lat: 0,
    lng: 0,
    // Friend Profile (Receiver)
    receiverId: 0,
    imgF: ''
  },
  mutations: {
    // Receiver
    SET_RECEIVER (state, data) {
      state.receiverId = data
    },
    SET_IMG_FRIEND (state, data) {
      state.imgF = data
    },
    // Sender
    SET_SENDER (state, data) {
      state.fullName = data.fullName
      state.username = data.username
      state.phone = data.phone
      state.bio = data.bio
      state.img = data.img
      state.lat = data.lat
      state.lng = data.lng
    },
    SET_FULLNAME (state, data) {
      state.fullName = data
    },
    SET_PHONE (state, data) {
      state.phone = data
    },
    SET_USERNAME (state, data) {
      state.username = data
    },
    SET_BIO (state, data) {
      state.bio = data
    },
    REMOVE_TOKEN (state) {
      state.token = ''
    }
  },
  actions: {
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        if (error.response.status === 401) {
          if (error.response.data.err === 'Invalid Token') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_TOKEN')
            this.$router.push('/login')
          } else if (error.response.data.err === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_TOKEN')
            this.$router.push('/login')
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {},
  modules: {}
})
