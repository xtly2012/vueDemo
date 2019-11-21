<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <Car v-for="(item, index) in list" :key="index" :name="item"/>
    </div>
    <div>
      <NewCar v-for="(item, index) in list" :key="index" :name="item"/>
      <div class="car">asdfasdf</div>
    </div>
    <div>
      <div class="test">
        1
      </div>
      <div class="test">
        2
      </div>
      <div class="test">
        3
      </div>
      <div class="test">
        4
      </div>
      <div class="test">
        5
      </div>
      <div>6</div>
    </div>
  </div>
</template>

<script>
import Car from './Car'
import NewCar from './NewCar'
export default {
  name: 'HelloWorld',
  components: {Car,NewCar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: ['大众','奔驰','马自达','法拉利'],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: #42b983;
    }
  }
}
</style>

<style>
  .test {
    border: 2px solid #000000;
    margin-top: 15px;
  }
  .test:last-of-type {
    margin-bottom: 100px;
  }
</style>