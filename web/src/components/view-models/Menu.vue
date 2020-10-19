<template>
  <div>
    <button @click="clickTop">Top</button>
    <button @click="clickBody">Body</button>
    <button @click="clickEquipment">Equipment</button>
    <button @click="clickParameterChip">ParameterChip</button>
    <button @click="clickMyset">Myset</button>
    <button @click="clickNotify">Notify</button>
    <button @click="clickRate">Rate</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { 
  goBodies ,
  goEquipments ,
  goMysets ,
  goNotifies ,
  goParameterChips ,
  goRates ,
  goTop
} from '@/router'

// 画面遷移はcontainersで行いたいけど
// Menuだけは共通部品としてViewModelで画面遷移する
export default defineComponent({
  name: 'MenuViewModel',
  setup(){
    const router = useRouter()
    const clickTop = () => goTop( router )
    const clickBody = () => goBodies( router )
    const clickEquipment = () => goEquipments( router )
    const clickParameterChip = () => goParameterChips( router )
    const clickMyset = () => goMysets( router )
    const clickNotify = () => goNotifies( router )
    const clickRate = () => goRates( router )
    return {
      clickTop ,
      clickBody ,
      clickEquipment ,
      clickParameterChip ,
      clickMyset ,
      clickNotify ,
      clickRate
    }
  }
})
</script>

<style scoped style="scss">
</style>
