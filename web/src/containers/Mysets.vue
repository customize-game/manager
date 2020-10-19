<template>
  <div>
    <menu-view-model />
    <myset-view-model />
    <mysets-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import MysetViewModel from '@/components/view-models/mysets/Myset.vue'
import MysetsViewModel from '@/components/view-models/mysets/Mysets.vue'

export default defineComponent({
  name: 'MysetsContainer',
  components : {
    MenuViewModel ,
    MysetViewModel ,
    MysetsViewModel , 
  } ,
  setup(){
    return {}
  }
})
</script>

<style>
</style>
