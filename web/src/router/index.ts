import { createRouter, createWebHistory } from 'vue-router'

// page components
import Bodies from '@/containers/Bodies.vue'
import EquipableParts from '@/containers/EquipableParts.vue'
import Equipments from '@/containers/Equipments.vue'
import Mysets from '@/containers/Mysets.vue'
import Notifies from '@/containers/Notifies.vue'
import ParameterChips from '@/containers/ParameterChips.vue'
import Parameters from '@/containers/Parameters.vue'
import Rates from '@/containers/Rates.vue'
import Top from '@/containers/Top.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    {
      path: '/bodies', 
      name: 'Bodies',
      component: Bodies
    },
    {
      path: '/equipable-parts', 
      name: 'EquipableParts',
      component: EquipableParts
    },
    {
      path: '/equipments', 
      name: 'Equipments',
      component: Equipments
    },
    {
      path: '/mysets', 
      name: 'Mysets',
      component: Mysets
    },
    {
      path: '/notifies', 
      name: 'Notifies',
      component: Notifies
    },
    {
      path: '/parameter-chips', 
      name: 'ParameterChips',
      component: ParameterChips
    },
    {
      path: '/parameters', 
      name: 'Parameters',
      component: Parameters
    },
    {
      path: '/rates', 
      name: 'Rates',
      component: Rates
    },
    {
      path: '/', 
      name: 'Top',
      component: Top
    },
  ]
})
export const goBodies = ( router : any ) => router.push( { name : 'Bodies' } )
export const goEquipableParts = ( router : any ) => router.push( { name : 'EquipableParts' } )
export const goEquipments = ( router : any ) => router.push( { name : 'Equipments' } )
export const goMysets = ( router : any ) => router.push( { name : 'Mysets' } )
export const goNotifies = ( router : any ) => router.push( { name : 'Notifies' } )
export const goParameterChips = ( router : any ) => router.push( { name : 'ParameterChips' } )
export const goParameters = ( router : any ) => router.push( { name : 'Parameters' } )
export const goRates = ( router : any ) => router.push( { name : 'Rates' } )
export const goTop = ( router : any ) => router.push( { name : 'Top' } )
