<template>
  <div class="dialog-body">
      <div>{{ message }}</div>
      <button @click="clickOkButton">OK</button>
      <button @click="clickCancelButton">キャンセル</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , SetupContext } from 'vue'

// TODO VuetifyがVue3.0に対応すればいらなくなるコンポーネント
// とりあえず共通部品としてダイアログの作成
export default defineComponent({
  name: 'ConfirmAtom',
  props: {
    message : {
      type : String ,
      default : ""
    }
  } ,
  setup( _ , context: SetupContext ){
    const clickOkButton = () => context.emit('click-ok-button');
    const clickCancelButton = () => context.emit('click-cancel-button');
    return {
      clickOkButton ,
      clickCancelButton
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
