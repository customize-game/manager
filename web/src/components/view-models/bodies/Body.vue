<template>
  <div>
    <button @click="clickNewNotify">新規通知発行</button>
    <div :class="state.dialogDisplay">
      <button @click="clickCloseButton">閉じる</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive } from 'vue'

export default defineComponent({
  name: 'BodyViewModel',
  setup(){
    const state = reactive({
      dialogDisplay: 'dialog-none'
    })
    const clickNewNotify = () => state.dialogDisplay = 'dialog-block'
    const clickCloseButton = () => state.dialogDisplay = 'dialog-none'
    return {
      state ,
      clickNewNotify ,
      clickCloseButton
    }
  }
})
</script>

<style scoped style="scss">
.dialog-none{
  display:none;
}
.dialog-block{
  display:block;
}
</style>
