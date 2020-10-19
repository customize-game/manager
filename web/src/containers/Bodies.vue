<template>
  <div>
    <menu-view-model />
    <body-view-model />
    <bodies-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import BodiesViewModel from '@/components/view-models/bodies/Bodies.vue'
import BodyViewModel from '@/components/view-models/bodies/Body.vue'

export default defineComponent({
  name: 'BodiesContainer',
  components : {
    MenuViewModel ,
    BodiesViewModel ,
    BodyViewModel , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
