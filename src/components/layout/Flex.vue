<template>
  <section>
    <div class="flex-contain">
      <div class="flex-item-start">aa</div>
      <div class="flex-item-end">bb</div>
    </div>
    <div class="flex-contain">
      <div class="flex-item-avg">aa</div>
      <div class="flex-item-avg">
        aaa
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.flex-contain {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  flex-flow: row nowrap;
  border:brown solid 1px;
}
.flex-item-start {
  flex: 1 1 300px;
  border:brown solid 2px;
}
.flex-item-end {
  flex: 0 0 200px;
  border:brown solid 5px;
}
.flex-item-avg {
  flex: 1;
  border:brown solid 5px;
}
.flex-item-avg:last-child::before {
  content: '';
  border: yellow solid 10px;
}
</style>