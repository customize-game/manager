<template>
  <div>
    <button @click="clickNewEquipablePart">新規装備可能箇所作成</button>
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
          <input-field-design
            ref="displayOrderInputFieldRef"
            type="number"
            name="表示順序"
          ></input-field-design>
        </template>
      </dialog-design>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , ref } from 'vue'
import { useStore } from 'vuex'

// design
import DialogDesign from '@/components/designs/Dialog.vue'
import InputFieldDesign from '@/components/designs/InputField.vue'

export default defineComponent({
  name : 'EquipablePartViewModel' ,
  components : {
    DialogDesign ,
    InputFieldDesign
  } ,
  setup(){
    const state = reactive({
      dialogShowing : false
    })
    const store = useStore()
    const idInputFieldRef = ref()
    const nameInputFieldRef = ref()
    const displayOrderInputFieldRef = ref()
    const clickNewEquipablePart = () => state.dialogShowing = true
    const clickCloseButton = () => state.dialogShowing = false
    const clickRegisterButton = () => store.dispatch( 'equipableParts/register' , {
        id : idInputFieldRef.value.state.data ,
        name : nameInputFieldRef.value.state.data
    } )
    return {
      state ,
      idInputFieldRef ,
      nameInputFieldRef ,
      displayOrderInputFieldRef ,
      clickNewEquipablePart ,
      clickCloseButton ,
      clickRegisterButton ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
