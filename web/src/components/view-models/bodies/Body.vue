<template>
  <div>
    <button @click="clickNewBody">新規素体作成</button>
    <div v-if="state.dialogShowing">
      <dialog-design 
        @click-close-button="clickCloseButton"
        @click-register-button="clickRegisterButton"
      >
        <template v-slot:content>
          <input-field-design
            ref="idInputFieldRef"
            type="number"
            name="ID"
          ></input-field-design>
          <input-field-design
            ref="nameInputFieldRef"
            type="text"
            name="名前"
          ></input-field-design>
        </template>
      </dialog-design>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , ref } from 'vue'

// design
import DialogDesign from '@/components/designs/Dialog.vue'
import InputFieldDesign from '@/components/designs/InputField.vue'

export default defineComponent({
  name: 'BodyViewModel',
  components : {
    DialogDesign ,
    InputFieldDesign
  } ,
  setup(){
    const state = reactive({
      dialogShowing : false
    })
    const idInputFieldRef = ref()
    const nameInputFieldRef = ref()
    const clickNewBody = () => state.dialogShowing = true
    const clickCloseButton = () => state.dialogShowing = false
    const clickRegisterButton = () => {
      console.log( idInputFieldRef.value.state.data );
      console.log( nameInputFieldRef.value.state.data );
    }
    return {
      state ,
      idInputFieldRef ,
      nameInputFieldRef ,
      clickNewBody ,
      clickCloseButton ,
      clickRegisterButton ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
