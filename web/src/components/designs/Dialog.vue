<template>
  <div class="dialog-body">
      <slot name="content"></slot>
      <button @click="clickRegisterButton">登録</button>
      <button @click="clickCloseButton">閉じる</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , SetupContext } from 'vue'

// TODO VuetifyがVue3.0に対応すればいらなくなるコンポーネント
// とりあえず共通部品としてダイアログの作成
export default defineComponent({
  name: 'DialogDesign',
  setup( _ , context: SetupContext ){
    const state = reactive({
    })
    const clickCloseButton = () => context.emit('click-close-button');
    const clickRegisterButton = () => context.emit('click-register-button');
    return {
      state ,
      clickCloseButton ,
      clickRegisterButton
    }
  }
})
</script>

<style scoped style="scss">
.dialog-body{
  position:absolute;
  width:300px;
  height:500px;
  background: yellowgreen;
}
</style>
