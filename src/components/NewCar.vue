<template>
  <div class="car">
    <div>
      car name: {{name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCar',
  props:['name']
}
</script>

<style src="../common/common.css">

</style>

<style scoped>
  div {
    color: brown;
  }
</style>