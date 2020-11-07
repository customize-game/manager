<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>フレーバー</th>
        <th>種別</th>
        <th>表示順序</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="parameter in parameters" :key="parameter.id">
        <td>{{ parameter.id }}</td>
        <td>{{ parameter.name }}</td>
        <td>{{ parameter.flavor }}</td>
        <td>{{ parameter.type }}</td>
        <td>{{ parameter.displayOrder }}</td>
        <td><button @click="()=>clickUpdateButton( parameter.id )" >更新</button></td>
        <td><button @click="()=>clickDeleteButton( parameter.id )" >削除</button></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { 
  computed , 
  defineComponent , 
  onMounted , 
  SetupContext 
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ParametersOrganism' ,
  setup( _  , context : SetupContext ){
    const store = useStore()
    const parameters = computed( () => store.state.parameters.list )
    const updateList = () => store.dispatch( 'parameters/updateList' )
    const clickUpdateButton = ( id : number ) => context.emit( 'click-update-button' , id )
    const clickDeleteButton = ( id : number ) => context.emit( 'click-delete-button' , id )
    onMounted( updateList )
    return {
      parameters ,
      clickUpdateButton ,
      clickDeleteButton ,
    }
  }
})
</script>

<style scoped>
</style>
