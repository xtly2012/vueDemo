<template>
  <div id="app">
    <nav>
      <a @click="route(0)" href="javascript:void(0)">例子页</a>
      <a @click="route(1)" href="javascript:void(0)">flex布局</a>
      <a @click="route(2)" href="javascript:void(0)">css图形</a>
      <a @click="route(3)" href="javascript:void(0)">flex垂直布局</a>
      <a @click="route(4)" href="javascript:void(0)">补间动画</a>
      <a @click="route(5)" href="javascript:void(0)">Float布局</a>
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
          break
        case 2 : 
          link = '/layout/figure'
          break
        case 3 :
          link = '/layout/verticalFlex'
          break
        case 4 :
          link = '/layout/flexTransition'
          break
        case 5 :
          link = '/layout/float'
          break
        default :
          link = '/'
      }
      this.$router.push(link)
    }
  }
}
</script>

<style>
html,body {
  height: 100%;
  margin:0;
  padding:0;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-router {
  width: 100%;
  height: 80%;
  border: black solid 3px;
}
</style>
