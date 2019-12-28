<template>
  <section>
    <ul class="stati-title">
      <li>
        数据1
      </li>
      <li>
        数据2
      </li>
      <li>
        数据3
        <span class="rignt-arrow"></span>
      </li>
    </ul>
    <ul class="stati-content">
      <li>
        数据1
      </li>
      <li>
        数据2
      </li>
      <li>
        数据3
      </li>
      <li>
        数据4
      </li>
      <li>
        数据5
      </li>
    </ul>
    <div class="stati-div">
      <div>数据1</div>
      <div>数据2</div>
      <div>数据3</div>
      <div>数据4</div>
      <div>数据5</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.stati-title {
  list-style: none;
  line-height: 40px;
  display: flex;
}
.stati-title li {
  border: gray solid 1px;
  text-align: center;
}
.stati-title li:nth-child(1) {
  flex: 0 0 100px;
}
.stati-title li:nth-child(2) {
  flex: 1 0 200px;
}
.stati-title li:nth-child(3) {
  flex: 0 0 200px;
}
.stati-content {
  list-style: none;
  border: gray solid 1px;
  box-sizing: border-box;
  height: 50px;
  font-size: 0;
}
.stati-content li {
  display: inline-block;
  width: 20%;
  font-size: 12px;
  box-sizing: border-box;
  border: gray solid 1px;
}
.stati-div {
  border: gray solid 1px;
}
.stati-div div {
  display: inline-block;
  width: 20%;
  border: gray solid 1px;
}
.rignt-arrow {
  vertical-align: top;
}
.rignt-arrow::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-top: 1px solid #656565;
  border-right: 1px solid #656565;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
