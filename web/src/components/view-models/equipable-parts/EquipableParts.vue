<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>表示順序</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="equipablePart in equipableParts" :key="equipablePart.id">
        <td>{{ equipablePart.id }}</td>
        <td>{{ equipablePart.name }}</td>
        <td>{{ equipablePart.displayOrder }}</td>
        <td><button @click="()=>clickUpdateButton( equipablePart.id )" >更新</button></td>
        <td><button @click="()=>clickDeleteButton( equipablePart.id )" >削除</button></td>
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
  name : 'EquipablePartsViewModel' ,
  setup( _  , context : SetupContext ){
    const state = reactive({})
    const store = useStore()
    const equipableParts = computed( () => store.state.equipableParts.list )
    const updateList = () => store.dispatch( 'equipableParts/updateList' )
    const clickUpdateButton = ( id : number ) => context.emit( 'click-update-button' , id )
    const clickDeleteButton = ( id : number ) => context.emit( 'click-delete-button' , id )
    onMounted( updateList )
    return {
      state ,
      equipableParts ,
      clickUpdateButton ,
      clickDeleteButton ,
    }
  }
})
</script>

<style scoped>
</style>
