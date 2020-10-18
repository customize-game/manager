<template>
  <div>
    <button @click="clickTop">Top</button>
    <button @click="clickNotify">Notify</button>
    <notify-view-model />
    <notifies-view-model />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { 
  goNotifies ,
  goTop
} from '@/router'

// view-models
import NotifyViewModel from '@/components/view-models/Notify.vue'
import NotifiesViewModel from '@/components/view-models/Notifies.vue'

export default defineComponent({
  name: 'NotifiesContainer',
  components: {
    NotifiesViewModel , 
    NotifyViewModel ,
  },
  setup(){
    const router = useRouter()
    const clickTop = () => goTop( router )
    const clickNotify = () => goNotifies( router )
    return {
      clickTop ,
      clickNotify
    }
  }
})
</script>

<style>
</style>
