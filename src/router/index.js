import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path : '/login',
    name : 'login',
    component : () => import('@/views/login')
  },
  {
    path : '/',
    component : () => import('@/views/layout'),
    children : [
      {
        path : '',   //默认子路由
        name : 'home',
        component : () => import('@/views/home/')
      },
      {
        path : '/travel',
        name : 'travel',
        component : () => import('@/views/travel/')
      },
      {
        path : '/mine',   //默认子路由
        name : 'mine',
        component : () => import('@/views/mine/')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
