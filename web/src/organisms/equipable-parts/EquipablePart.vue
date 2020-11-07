<template>
  <div>
    <button @click="clickNewEquipablePart">新規装備可能箇所作成</button>
    <div v-if="state.dialogShowing">
      <dialog-atom 
        @click-close-button="clickCloseButton"
        @click-register-button="clickRegisterButton"
      >
        <template v-slot:content>
          <input-field-molecule
            ref="idInputFieldRef"
            type="number"
            name="ID"
          ></input-field-molecule>
          <input-field-molecule
            ref="nameInputFieldRef"
            type="text"
            name="名前"
          ></input-field-molecule>
          <input-field-molecule
            ref="displayOrderInputFieldRef"
            type="number"
            name="表示順序"
          ></input-field-molecule>
        </template>
      </dialog-atom>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , ref } from 'vue'
import { useStore } from 'vuex'

// molecule
import DialogAtom from '@/atoms/Dialog.vue'
import InputFieldMolecule from '@/molecules/InputField.vue'

export default defineComponent({
  name : 'EquipablePartOrganism' ,
  components : {
    DialogAtom ,
    InputFieldMolecule
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
