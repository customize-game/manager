<template>
  <div>
    <menu-view-model />
    <parameter-view-model />
    <parameters-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import ParameterViewModel from '@/components/view-models/parameters/Parameter.vue'
import ParametersViewModel from '@/components/view-models/parameters/Parameters.vue'

export default defineComponent({
  name: 'ParameterChipsContainer',
  components : {
    MenuViewModel ,
    ParameterViewModel ,
    ParametersViewModel ,
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
