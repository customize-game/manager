import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/sample', 
    name: 'Sample',
    component: () => import ('@/containers/Sample.vue')
  },
  {
    path: '/', 
    name: 'Top',
    component: () => import ('@/containers/Top.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router