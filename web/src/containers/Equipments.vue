<template>
  <div>
    <menu-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'

export default defineComponent({
  name: 'EquipmentsContainer',
  components : {
    MenuViewModel
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
