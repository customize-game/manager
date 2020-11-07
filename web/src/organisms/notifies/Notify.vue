<template>
  <div>
    <button @click="clickNewNotify">新規通知発行</button>
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
  name: 'NotifyOrganism',
  components : {
    DialogAtom
  } ,
  setup(){
    const state = reactive({
      dialogShowing : false
    })
    const idInputFieldRef = ref()
    const nameInputFieldRef = ref()
    const clickNewNotify = () => state.dialogShowing = true
    const clickCloseButton = () => state.dialogShowing = false
    const clickRegisterButton = () => {
      console.log( idInputFieldRef.value.state.data );
      console.log( nameInputFieldRef.value.state.data );
    }
    return {
      state ,
      idInputFieldRef ,
      nameInputFieldRef ,
      clickNewNotify ,
      clickCloseButton ,
      clickRegisterButton ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
