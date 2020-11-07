<template>
  <div>
    <menu-organism />
    <notify-organism />
    <notifies-organism />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// organisms
import MenuOrganism from '@/organisms/Menu.vue'
import NotifiesOrganism from '@/organisms/notifies/Notifies.vue'
import NotifyOrganism from '@/organisms/notifies/Notify.vue'

export default defineComponent({
  name: 'NotifiesPage',
  components: {
    MenuOrganism ,
    NotifiesOrganism , 
    NotifyOrganism ,
  },
  setup(){
    return {}
  }
})
</script>

<style>
</style>
