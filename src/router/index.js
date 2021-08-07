import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/upload1',
    name: 'Upload1',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/Upload1.vue')
  },
  {
    path: '/upload2',
    name: 'Upload2',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/Upload2.vue')
  },
  {
    path: '/upload3',
    name: 'Upload3',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/Upload3.vue')
  },
  {
    path: '/upload4',
    name: 'Upload4',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/Upload4.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/message/Message.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
