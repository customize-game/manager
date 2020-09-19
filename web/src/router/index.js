import { createRouter, createWebHistory } from 'vue-router'

import Top from '../containers/Top'
import Sample from '../containers/Sample'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/sample', 
      component: Sample 
    },
    { 
      path: '/', 
      component: Top 
    },
  ],
})

export default router