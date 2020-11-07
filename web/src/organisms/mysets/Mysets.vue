<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>ユーザID</th>
        <th>名前</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="myset in mysets" :key="myset.id">
        <td>{{ myset.id }}</td>
        <td>{{ myset.userId }}</td>
        <td>{{ myset.name }}</td>
        <td><button @click="()=>clickUpdateButton( myset.id )" >更新</button></td>
        <td><button @click="()=>clickDeleteButton( myset.id )" >削除</button></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { 
  computed , 
  defineComponent , 
  onMounted , 
  reactive , 
  SetupContext 
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MysetsOrganism' ,
  setup( _  , context : SetupContext ){
    const state = reactive({})
    const store = useStore()
    const mysets = computed( () => store.state.mysets.list )
    const updateList = () => store.dispatch( 'mysets/updateList' )
    const clickUpdateButton = ( id : number ) => context.emit( 'click-update-button' , id )
    const clickDeleteButton = ( id : number ) => context.emit( 'click-delete-button' , id )
    onMounted( updateList )
    return {
      state ,
      mysets ,
      clickUpdateButton ,
      clickDeleteButton ,
    }
  }
})
</script>

<style scoped>
</style>
