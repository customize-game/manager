<template>
  <div>
    <menu-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'

export default defineComponent({
  name: 'TopPage',
  components : {
    MenuOrganism
  } ,
  setup(){
    return {
      MenuOrganism
    }
  }
})
</script>

<style>
</style>
