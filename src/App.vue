<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="getData">测试</button>
  </div>
</template>

<script>
import https from '@/api/https.js'
export default {
  name: 'App',
  methods: {
    getData() {
      https.get('/test')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
