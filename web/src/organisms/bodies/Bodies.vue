<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>ルビ</th>
        <th>フレーバー</th>
        <th>表示順序</th>
        <th>装備可能箇所</th>
        <th>ステータス</th>
        <th>空きソケット(x,y)</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="body in bodies" :key="body.id">
        <td>{{ body.id }}</td>
        <td>{{ body.name }}</td>
        <td>{{ body.ruby }}</td>
        <td>{{ body.flavor }}</td>
        <td>{{ body.displayOrder }}</td>
        <td>
          <div v-for="equipablePart in body.equipableParts" :key="equipablePart.id">
            {{ equipablePart.name }}
          </div>
        </td>
        <td>
          <status-molecule
            v-for="status in body.statuses" :key="status.id"
            :status="status"
          ></status-molecule>
        </td>
        <td>
          <div v-for="freeSocket in body.freeSockets" :key="freeSocket.id">
            ( {{ freeSocket.x }} , {{ freeSocket.y  }} )
            <status-molecule
              v-for="socketStatus in freeSocket.statuses" :key="socketStatus.id"
              :status="socketStatus"
            ></status-molecule>
          </div>
        </td>
        <td><button @click="()=>clickUpdateButton( body.id )" >更新</button></td>
        <td><button @click="()=>clickDeleteButton( body.id )" >削除</button></td>
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
  name : 'BodiesOrganism' ,
  components : {
    StatusMolecule
  } ,
  setup( _  , context : SetupContext ){
    const state = reactive({})
    const store = useStore()
    const bodies = computed( () => store.state.bodies.list )
    const updateList = () => store.dispatch( 'bodies/updateList' )
    const clickUpdateButton = ( id : number ) => context.emit( 'click-update-button' , id )
    const clickDeleteButton = ( id : number ) => context.emit( 'click-delete-button' , id )
    onMounted( updateList )
    return {
      state ,
      bodies ,
      clickUpdateButton ,
      clickDeleteButton ,
    }
  }
})
</script>

<style scoped>
</style>
