<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>ステータス</th>
        <th>ピン(x,y)</th>
        <th>表示順序</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="parameterChip in parameterChips" :key="parameterChip.id">
        <td>{{ parameterChip.id }}</td>
        <td>{{ parameterChip.name }}</td>
        <td>
          <status-molecule
            v-for="status in parameterChip.statuses" :key="status.id"
            :status="status"
          ></status-molecule>
        </td>
        <td>
          <div v-for="pin in parameterChip.pins" :key="pin.id">
            ( {{ pin.x }} , {{ pin.y }} )
          </div>
        </td>
        <td>{{ parameterChip.displayOrder }}</td>
        <td><button @click="()=>clickUpdateButton( parameterChip.id )" >更新</button></td>
        <td><button @click="()=>clickDeleteButton( parameterChip.id )" >削除</button></td>
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

import StatusMolecule from '@/molecules/Status.vue'

export default defineComponent({
  name: 'ParameterChipsOrganism' ,
  components : {
    StatusMolecule
  } ,
  setup( _  , context : SetupContext ){
    const state = reactive({})
    const store = useStore()
    const parameterChips = computed( () => store.state.parameterChips.list )
    const updateList = () => store.dispatch( 'parameterChips/updateList' )
    const clickUpdateButton = ( id : number ) => context.emit( 'click-update-button' , id )
    const clickDeleteButton = ( id : number ) => context.emit( 'click-delete-button' , id )
    onMounted( updateList )
    return {
      state ,
      parameterChips ,
      clickUpdateButton ,
      clickDeleteButton ,
    }
  }
})
</script>

<style scoped>
</style>
