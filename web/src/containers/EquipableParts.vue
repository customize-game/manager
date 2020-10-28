<template>
  <div>
    <menu-view-model />
    <equipable-part-view-model />
    <equipable-parts-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import EquipablePartViewModel from '@/components/view-models/equipable-parts/EquipablePart.vue'
import EquipablePartsViewModel from '@/components/view-models/equipable-parts/EquipableParts.vue'

export default defineComponent({
  name: 'EquipmentsContainer',
  components : {
    MenuViewModel ,
    EquipablePartViewModel ,
    EquipablePartsViewModel , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
