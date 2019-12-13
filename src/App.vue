<template>
  <div id="app">
    <nav>
      <a @click="route(0)" href="javascript:void(0)">例子页</a>
      <a @click="route(1)" href="javascript:void(0)">flex布局</a>
    </nav>
    <div class="app-router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import https from '@/api/https.js'
export default {
  name: 'App',
  methods: {
    getData() {
      https.get('/test')
    },
    route(index) {
      let link = '/'
      switch(index) {
        case 1 :
          link = '/layout/flex'
          break;
        default :
          link = '/'
      }
      this.$router.push(link)
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
.app-router {
  width: 100%;
}
</style>
