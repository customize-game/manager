<template>
  <div>
    <div v-for="notify in notifies" :key="notify.id">
      <div>{{ notify.id }}</div>
      <div>{{ notify.title }}</div>
    </div>
    <button @click="temp">temp</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , computed , onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'BodiesViewModel',
  setup(){
    const state = reactive({})
    const store = useStore()
    const notifies = computed( () => store.state.notify.list )
    const updateList = () => store.dispatch( 'notify/updateList' )
    onMounted( updateList )
    return {
      state ,
      notifies
    }
  }
})
</script>

<style scoped>
</style>
