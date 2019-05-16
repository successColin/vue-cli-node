import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/',
      name: 'todo',
      component: () => import('@/views/todo')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/persons',
      name: 'persons',
      component: () => import('@/views/persons')
    },
    {
      path: '/floor',
      name: 'floor',
      component: () => import('@/views/floor')
    },
    {
      path: '/boot',
      name: 'boot',
      component: () => import('@/views/boot')
    },
    {
      path: '/merge',
      name: 'merge',
      component: () => import('@/views/merge')
    },{
      path: '/code',
      name: 'code',
      component: () => import('@/views/code')
    },{
      path: '/table',
      name: 'table',
      component: () => import('@/views/table')
    }
  ]
})
