<template>
  <section>
    <div class="mark-status">中文</div>
    <div class="flex-contain">
      <div class="flex-item-start">
        aa
        <div class="mark-status">中文</div>
      </div>
      <div class="mark-status">中文</div>
      <div class="flex-item-end">
        网易科技讯 5月5日消息，近期，滴滴总裁柳青在洛杉矶参加米尔肯全球大会，
      </div>
    </div>
    <div class="flex-contain">
      <div class="flex-item-avg">aa</div>
      <div class="flex-item-avg">
        aaa
      </div>
    </div>
    <div id="wrap">
    <img alt="" id="left" src="img1.jpg">
    <div id="right">
        <p class="name">昵称</p>
        <p class="content">内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号内容显示省略号</p>
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
.flex-item-avg:last-child::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-top: 3px solid #bfbfbf;
  border-right: 3px solid #bfbfbf;
  transform: rotate(45deg);
  vertical-align: middle;
}
.flex-item-avg:last-child {
  position: relative;
}
.flex-item-avg:last-child::after {
  content: "";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #e2e2e2;
  border-style: solid;
  -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
  transform: matrix(.71,.71,-.71,.71,0,0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 2px;
}
.mark-status {
  height: 80px;
  width: 80px;
  line-height: 80px;
  font-size: 28px;
  background-color: orange;
  align-self: center;
}
#wrap {
    display: flex;
    border: 1px solid black;
}
#left {
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid #ccc;
}
#right {
    flex: 1;
    background: yellow;
    overflow: hidden;
}
.content  {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: red;
}
</style>