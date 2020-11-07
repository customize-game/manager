<template>
  <div>
    <menu-organism />
    <equipable-part-organism />
    <equipable-parts-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import EquipablePartOrganism from '@/organisms/equipable-parts/EquipablePart.vue'
import EquipablePartsOrganism from '@/organisms/equipable-parts/EquipableParts.vue'

export default defineComponent({
  name: 'EquipmentsPage',
  components : {
    MenuOrganism ,
    EquipablePartOrganism ,
    EquipablePartsOrganism , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
