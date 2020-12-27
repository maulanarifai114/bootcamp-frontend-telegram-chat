import Vue from 'vue'
import VueRouter from 'vue-router'

// Authentication
import Login from '../views/auth/Login.vue'
import SignUp from '../views/auth/SignUp.vue'

// Room Chat
import Room from '../views/main/Room.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'All',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem('token')) {
      next({
        path: '/room'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
