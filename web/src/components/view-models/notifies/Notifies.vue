<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="notify in notifies" :key="notify.id">
        <td>{{ notify.id }}</td>
        <td>{{ notify.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { 
  computed , 
  defineComponent , 
  onMounted , 
  reactive
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NotifiesViewModel' ,
  setup(){
    const state = reactive({})
    const store = useStore()
    const notifies = computed( () => store.state.notifies.list )
    const updateList = () => store.dispatch( 'notifies/updateList' )
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
