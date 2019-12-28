<template>
    <div class="flex-vertical">
      <div class="vertical-one">asdfsaf</div>
      <div class="vertical-two">asdfsaf</div>
      <div class="vertical-three">
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.flex-vertical {
  height: 100%;
  display: flex;
  flex-direction: column;
  border: black solid 1px;
}
.vertical-one {
  flex: 0 0 70px;
  border: orange solid 1px;
}
.vertical-two {
  flex: 1 0 100px;
  border: orange solid 1px;
}
.vertical-three {
  flex: 10 0 150px;
  border: orange solid 1px;
  overflow-y: auto;
}
</style>