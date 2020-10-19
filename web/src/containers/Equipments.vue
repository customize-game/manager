<template>
  <div>
    <menu-view-model />
    <equipment-view-model />
    <equipments-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import EquipmentViewModel from '@/components/view-models/equipments/Equipment.vue'
import EquipmentsViewModel from '@/components/view-models/equipments/Equipments.vue'

export default defineComponent({
  name: 'EquipmentsContainer',
  components : {
    MenuViewModel ,
    EquipmentViewModel ,
    EquipmentsViewModel , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
