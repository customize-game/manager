<template>
  <div>
    <menu-organism />
    <parameter-chip-organism />
    <parameter-chips-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import ParameterChipOrganism from '@/organisms/parameter-chips/ParameterChip.vue'
import ParameterChipsOrganism from '@/organisms/parameter-chips/ParameterChips.vue'

export default defineComponent({
  name: 'ParameterChipsPage',
  components : {
    MenuOrganism ,
    ParameterChipOrganism ,
    ParameterChipsOrganism ,
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
