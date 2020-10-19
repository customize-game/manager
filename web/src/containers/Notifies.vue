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
import NotifiesViewModel from '@/components/view-models/notifies/Notifies.vue'
import NotifyViewModel from '@/components/view-models/notifies/Notify.vue'

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
