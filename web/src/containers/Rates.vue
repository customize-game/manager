<template>
  <div>
    <menu-view-model />
    <rates-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import RatesViewModel from '@/components/view-models/rates/Rates.vue'

export default defineComponent({
  name: 'RatesContainer',
  components : {
    MenuViewModel ,
    RatesViewModel ,
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
