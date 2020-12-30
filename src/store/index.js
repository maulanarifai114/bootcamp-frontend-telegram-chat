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
    phone: '',
    bio: '',
    img: '',
    center: [0, 0],
    // Friend Profile (Receiver)
    receiverId: null,
    imgF: '',
    usernameF: '',
    nameF: '',
    phoneF: '',
    centerF: [0, 0]
  },
  mutations: {
    // Remove All
    REMOVE_ALL (state) {
      // My Profile (Sender)
      state.senderId = null
      state.token = null
      state.fullName = ''
      state.username = ''
      state.phone = ''
      state.bio = ''
      state.img = ''
      state.center = []
      // Friend Profile (Receiver)
      state.receiverId = 0
      state.imgF = ''
      state.usernameF = ''
      state.nameF = ''
      state.phoneF = ''
      state.centerF = []
    },
    // Receiver
    SET_RECEIVER (state, data) {
      state.receiverId = data.id
      state.imgF = data.img
      state.usernameF = data.username
      state.nameF = data.fullName
      state.phoneF = data.phone
    },
    SET_RECEIVER_LOC (state, data) {
      state.centerF = []
      state.centerF.push(data.lat)
      state.centerF.push(data.lng)
    },
    // Sender
    SET_SENDER (state, data) {
      state.senderId = data.id
      state.token = data.token
      state.fullName = data.fullName
      state.username = data.username
      state.phone = data.phone
      state.bio = data.bio
      state.img = data.img
    },
    SET_TOKEN (state, data) {
      state.token = data
    },
    SET_LOCATION (state, data) {
      state.center = []
      state.center.push(data.lat)
      state.center.push(data.lng)
    },
    SET_IMAGE (state, data) {
      state.img = data
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
            context.commit('REMOVE_ALL')
            this.$router.push('/login')
          } else if (error.response.data.err === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_ALL')
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
