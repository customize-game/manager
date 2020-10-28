<template>
  <div>
      <label>{{ name }}</label>
      <input :type="type" v-model="state.data" />
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive } from 'vue'

// TODO VuetifyがVue3.0に対応すればいらなくなるコンポーネント
// とりあえず共通部品としてダイアログの作成
export default defineComponent({
  name: 'InputFieldDesign',
  props : {
    name : {
      type : String ,
      default : "" ,
    } ,
    type : {
      type : String ,
      default : "text" ,
    }
  } ,
  setup(){
    const state = reactive({
      data : ""
    })
    return {
      state ,
    }
  }
})
</script>

<style scoped style="scss">
</style>
