import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/email-resend/:email',
    name: 'EmailResend',
    props:true,
    component: () => import('../views/EmailResend.vue')
  },
  {
    path: '/verification/:code?',
    name: 'Verification',
    props:true,
    component: () => import('../views/Verification.vue')
  },

  {
    path: '/password/',
    name: 'Password',
    component: () => import('../views/Password.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
