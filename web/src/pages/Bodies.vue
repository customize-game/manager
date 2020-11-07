<template>
  <div>
    <menu-organism />
    <body-organism />
    <bodies-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import BodiesOrganism from '@/organisms/bodies/Bodies.vue'
import BodyOrganism from '@/organisms/bodies/Body.vue'

export default defineComponent({
  name: 'BodiesPage',
  components : {
    MenuOrganism ,
    BodiesOrganism ,
    BodyOrganism , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
