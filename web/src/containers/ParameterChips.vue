<template>
  <div>
    <menu-view-model />
    <parameter-chip-view-model />
    <parameter-chips-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import ParameterChipViewModel from '@/components/view-models/parameter-chips/ParameterChip.vue'
import ParameterChipsViewModel from '@/components/view-models/parameter-chips/ParameterChips.vue'

export default defineComponent({
  name: 'ParameterChipsContainer',
  components : {
    MenuViewModel ,
    ParameterChipViewModel ,
    ParameterChipsViewModel ,
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
