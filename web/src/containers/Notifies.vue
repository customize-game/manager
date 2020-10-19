<template>
  <div>
    <menu-view-model />
    <notify-view-model />
    <notifies-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// view-models
import MenuViewModel from '@/components/view-models/Menu.vue'
import NotifyViewModel from '@/components/view-models/Notify.vue'
import NotifiesViewModel from '@/components/view-models/Notifies.vue'

export default defineComponent({
  name: 'NotifiesContainer',
  components: {
    MenuViewModel ,
    NotifiesViewModel , 
    NotifyViewModel ,
  },
  setup(){
    return {}
  }
})
</script>

<style>
</style>
