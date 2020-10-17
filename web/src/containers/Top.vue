<template>
  <div>
    <router-link to="/">Top</router-link>
    <router-link to="/sample">sample</router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    top
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Top',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
