<template>
  <div>
    <button @click="clickTop">Top</button>
    <button @click="clickParameter">パラメータ</button>
    <button @click="clickBody">素体</button>
    <button @click="clickEquipableParts">装備可能箇所</button>
    <button @click="clickEquipment">装備</button>
    <button @click="clickParameterChip">パラメータチップ</button>
    <button @click="clickMyset">マイセット</button>
    <button @click="clickNotify">通知</button>
    <button @click="clickRate">レート</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { 
  goBodies ,
  goEquipableParts ,
  goEquipments ,
  goMysets ,
  goNotifies ,
  goParameterChips ,
  goParameters ,
  goRates ,
  goTop
} from '@/router'

export default defineComponent({
  name: 'MenuOrganism',
  setup(){
    const router = useRouter()
    const clickBody = () => goBodies( router )
    const clickEquipableParts = () => goEquipableParts( router )
    const clickEquipment = () => goEquipments( router )
    const clickMyset = () => goMysets( router )
    const clickNotify = () => goNotifies( router )
    const clickParameterChip = () => goParameterChips( router )
    const clickParameter = () => goParameters( router )
    const clickRate = () => goRates( router )
    const clickTop = () => goTop( router )
    return {
      clickBody ,
      clickEquipableParts ,
      clickEquipment ,
      clickMyset ,
      clickNotify ,
      clickParameterChip ,
      clickParameter ,
      clickRate ,
      clickTop ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
