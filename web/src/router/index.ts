import { createRouter, createWebHistory } from 'vue-router'

// page components
import Notifies from '@/containers/Notifies.vue'
import Top from '@/containers/Top.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    {
      path: '/notifies', 
      name: 'Notifies',
      component: Notifies
    },
    {
      path: '/', 
      name: 'Top',
      component: Top
    },
  ]
})
export const goTop = ( router : any ) => router.push( { name : 'Top' } )
export const goNotifies = ( router : any ) => router.push( { name : 'Notifies' } )