<template>
  <div>
    <menu-organism />
    <rates-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import RatesOrganism from '@/organisms/rates/Rates.vue'

export default defineComponent({
  name: 'RatesPage',
  components : {
    MenuOrganism ,
    RatesOrganism ,
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
