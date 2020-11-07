<template>
  <div>
    <button @click="clickNewParameterChips">新規パラメータチップ作成</button>
    <div v-if="state.dialogShowing">
      <dialog-atom 
        @click-close-button="clickCloseButton"
        @click-register-button="clickRegisterButton"
      >
        <template v-slot:content>
        </template>
      </dialog-atom>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , ref } from 'vue'

// molecule
import DialogAtom from '@/atoms/Dialog.vue'

export default defineComponent({
  name: 'ParameterChipOrganism',
  components : {
    DialogAtom
  } ,
  setup(){
    const state = reactive({
      dialogShowing : false
    })
    const idInputFieldRef = ref()
    const nameInputFieldRef = ref()
    const clickNewParameterChips = () => state.dialogShowing = true
    const clickCloseButton = () => state.dialogShowing = false
    const clickRegisterButton = () => {
      console.log( idInputFieldRef.value.state.data );
      console.log( nameInputFieldRef.value.state.data );
    }
    return {
      state ,
      idInputFieldRef ,
      nameInputFieldRef ,
      clickNewParameterChips ,
      clickCloseButton ,
      clickRegisterButton ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
