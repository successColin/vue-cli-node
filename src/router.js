import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
    }
  ]
})
