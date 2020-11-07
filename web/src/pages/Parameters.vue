<template>
  <div>
    <menu-organism />
    <parameter-organism />
    <parameters-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import ParameterOrganism from '@/organisms/parameters/Parameter.vue'
import ParametersOrganism from '@/organisms/parameters/Parameters.vue'

export default defineComponent({
  name: 'ParameterChipsPage',
  components : {
    MenuOrganism ,
    ParameterOrganism ,
    ParametersOrganism ,
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
