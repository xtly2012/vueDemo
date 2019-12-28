<template>
  <div>
    <div class="keepbj">
      <div id="div1">我会在左边</div>
      <div id="div2">我会在右边</div>
      <div class="clear"></div>
    </div>
    <div id="div3">
      我不会受flaot的影响。
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.keepbj {
  //通过class来设置
  width: 100%;
  border: 10px solid #f00;
}
#div1 {
  float: left;
  width: 100px;
  height: 50px;
  border: 1px solid #f00;
}
#div2 {
  float: right;
  width: 100px;
  height: 50px;
  border: 1px solid #f00;
}
.clear {
  clear: both;
}
#div3 {
  width: 300px;
  height: 30px;
  border: 1px solid #f00;
}
</style>
