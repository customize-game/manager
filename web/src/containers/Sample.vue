<template>
  <div>
    <router-link to="/">Top</router-link>
    <router-link to="/sample">sample</router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    sample
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Sample',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
