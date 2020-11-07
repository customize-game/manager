<template>
  <div>
    <table>
      <tr>
        <th>ユーザID</th>
        <th>レート</th>
      </tr>
      <tr v-for="rate in rates" :key="rate.id">
        <td>{{ rate.userId }}</td>
        <td>{{ rate.rate }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { 
  computed , 
  defineComponent , 
  onMounted
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'RatesOrganism' ,
  setup(){
    const store = useStore()
    const rates = computed( () => store.state.rates.list )
    const updateList = () => store.dispatch( 'rates/updateList' )
    onMounted( updateList )
    return {
      rates
    }
  }
})
</script>

<style scoped>
</style>
