<template>
  <div>
    <button @click="clickNewBody">新規素体作成</button>
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
            ref="rubyInputFieldRef"
            type="text"
            name="ルビ"
          ></input-field-molecule>
          <input-field-molecule
            ref="flavorInputFieldRef"
            type="text"
            name="フレーバー"
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

// molecule
import DialogAtom from '@/atoms/Dialog.vue'
import InputFieldMolecule from '@/molecules/InputField.vue'

export default defineComponent({
  name: 'BodyOrganism',
  components : {
    DialogAtom ,
    InputFieldMolecule
  } ,
  setup(){
    const state = reactive({
      dialogShowing : false
    })
    const idInputFieldRef = ref()
    const nameInputFieldRef = ref()
    const rubyInputFieldRef = ref()
    const flavorInputFieldRef = ref()
    const displayOrderInputFieldRef = ref()
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
      rubyInputFieldRef ,
      flavorInputFieldRef ,
      displayOrderInputFieldRef ,
      clickNewBody ,
      clickCloseButton ,
      clickRegisterButton ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
