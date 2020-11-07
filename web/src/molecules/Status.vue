<template>
  <div>
    <template v-if="status.type=='number'" >
      {{ status.name }} : {{ status.value }}
    </template>
    <template v-if="status.type=='multiplication'" >
      {{ status.name }} : ×{{ status.value }}
    </template>
    <template v-if="status.type=='boolean'">
      {{ status.name }}
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StatusMolecule',
  props : {
    status : Object
  } ,
  setup(){
    return {}
  }
})
</script>

<style scoped style="scss">
</style>