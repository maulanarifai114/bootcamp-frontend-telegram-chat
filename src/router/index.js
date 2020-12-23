import Vue from 'vue'
import VueRouter from 'vue-router'

// Authentication
import Login from '../views/auth/Login.vue'
import SignUp from '../views/auth/SignUp.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
