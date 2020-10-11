import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/sample', 
    name: 'Sample',
    component: () => import (/* webpackChunkName: "sample" */ '../containers/Sample.vue')
  },
  {
    path: '/', 
    name: 'Top',
    component: () => import (/* webpackChunkName: "top" */ '../containers/Top.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router