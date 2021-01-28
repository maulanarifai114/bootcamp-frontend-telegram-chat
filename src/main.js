import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Vue Browser
import VueGeolocation from 'vue-browser-geolocation'
// Vue Toastification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
// Vue Google Sign In
import GoogleSignInButton from 'vue-google-signin-button-directive'
// Title Page
import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin)
Vue.use(GoogleSignInButton)
Vue.use(VueGeolocation)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
