<template>
  <div>
    <menu-organism />
    <equipment-organism />
    <equipments-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import EquipmentOrganism from '@/organisms/equipments/Equipment.vue'
import EquipmentsOrganism from '@/organisms/equipments/Equipments.vue'

export default defineComponent({
  name: 'EquipmentsPage',
  components : {
    MenuOrganism ,
    EquipmentOrganism ,
    EquipmentsOrganism , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
