<template>
  <div>
    <menu-organism />
    <mysets-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import MysetsOrganism from '@/organisms/mysets/Mysets.vue'

export default defineComponent({
  name: 'MysetsPage',
  components : {
    MenuOrganism ,
    MysetsOrganism , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
