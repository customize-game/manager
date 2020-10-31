<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>フレーバー</th>
        <th>装備箇所</th>
        <th>装備できなくなる箇所</th>
        <th>増える装備箇所</th>
        <th>ステータス</th>
        <th>増えるインタフェース数</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="equipment in equipments" :key="equipment.id">
        <td>{{ equipment.id }}</td>
        <td>{{ equipment.name }}</td>
        <td>{{ equipment.flavor }}</td>
        <td>
          <div v-for="equipablePart in equipment.equipableParts" :key="equipablePart.id">
            {{ equipablePart.name }}
            <status-design
              v-for="status in equipablePart.statuses" :key="status.id"
              :status="status"
            ></status-design>
          </div>
        </td>
        <td>
          <div v-for="unEquipablePart in equipment.unEquipableParts" :key="unEquipablePart.id">
            {{ unEquipablePart.name }}
          </div>
        </td>
        <td>
          <div v-for="addEquipablePart in equipment.addEquipableParts" :key="addEquipablePart.id">
            {{ addEquipablePart.name }}
            <status-design
              v-for="status in addEquipablePart.statuses" :key="status.id"
              :status="status"
            ></status-design>
          </div>
        </td>
        <td>
          <status-design
            v-for="status in equipment.statuses" :key="status.id"
            :status="status"
          ></status-design>
        </td>
        <td>{{ equipment.additionalInterfaceCount }}</td>
        <td><button @click="()=>clickUpdateButton( equipment.id )" >更新</button></td>
        <td><button @click="()=>clickDeleteButton( equipment.id )" >削除</button></td>
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

import StatusDesign from '@/components/designs/Status.vue'

export default defineComponent({
  name : 'EquipmentsViewModel' ,
  components : {
    StatusDesign
  } ,
  setup( _  , context : SetupContext ){
    const state = reactive({})
    const store = useStore()
    const equipments = computed( () => store.state.equipments.list )
    const updateList = () => store.dispatch( 'equipments/updateList' )
    const clickUpdateButton = ( id : number ) => context.emit( 'click-update-button' , id )
    const clickDeleteButton = ( id : number ) => context.emit( 'click-delete-button' , id )
    onMounted( updateList )
    return {
      state ,
      equipments ,
      clickUpdateButton ,
      clickDeleteButton ,
    }
  }
})
</script>

<style scoped>
</style>
