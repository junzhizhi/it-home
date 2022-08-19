import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/Login'
import Layout from '@/views/layout/Layout'
import Home from '@/views/layout/Home'
import User from '@/views/layout/User'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
