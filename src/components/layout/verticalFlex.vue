<template>
  <div class="flex-vertical">
    <div class="vertical-one">
      <div>
        测试
        <button @click="showClass">测试</button>
        <button @click="showAnim">测试1</button>
        <button @click="showMask">showMask</button>
      </div>
      <div :class="[{ 'test': isShow },{'animation':isAnim}]">
        好好学习，天天向上
      </div>
    </div>
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
    <div :class="['flex-mask',{'flex-mask_transparent':isMask}]">
    </div>
    <div :class="['flex-menu', {'flex-menu_show': isMask}]">
        <div>
          <div>
            <div>测试用例</div>
          </div>
        </div>
        <div>
          <div @click="showMask">
            <div>取消</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "verticalFlex",
  data() {
    return {
      isShow: false,
      isAnim: false,
      isMask: false,
    };
  },
  methods: {
    showClass() {
      this.isShow = !this.isShow;
    },
    showAnim() {
      this.isAnim = !this.isAnim;
    },
    showMask() {
      this.isMask = !this.isMask;
    }
  }
};
</script>

<style lang="less" scoped>
.flex-vertical {
  height: 100%;
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  .vertical-one {
    flex: 0 0 70px;
    border: orange solid 1px;
    div:nth-child(1) {
      font-size: 32px;
      transform: scale(0.5);
    }
    div:nth-child(2) {
      position: relative;
      border: orange solid 1px;
      width: 200px;
      transition: all 3s ease;
    }
    .test {
      width: 600px !important;
    }
    .animation {
      width: 300px;
      height: 300px;
      position: absolute;
      font-size: 22px;
      color: white;
      background-color: brown;
      animation: ccchange 3s ease alternate infinite;
    }
    @keyframes ccchange {
      0% {
        width: 300px;
        height: 300px;
        background-color: brown;
      }
      40% {
        width: 500px;
        height: 500px;
        background-color: seagreen;
      }
      60% {
        width: 400px;
        height: 400px;
        background-color: coral;
      }
      100% {
      }
    }
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
  .flex-mask {
    display: none;
    background: rgba(0, 0, 0, 0.6);
  }
  .flex-mask_transparent {
    display: block;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .flex-menu {
    position: fixed;
    z-index: 5000;
    top: 0;
    right: 0;
    left: 0;
    transform: translateY(-100%);
    transition: transform 3s,-webkit-transform 3s;
    background: #fff;
    div {
      div {
        height: 50%;
        display: table;
        margin: 0 auto;
        div {
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
  }
  .flex-menu_show {
    transform: translate(0)
  }
}
</style>
