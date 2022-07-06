<template>
  <div>
    <h3>滑動驗證</h3>
    <slide-verify
      ref="slideblock"
      @again="onAgain"
      @fulfilled="onFulfilled"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :slider-text="text"
      :accuracy="accuracy"
      :imgs="bgimgs"
      :l="42"
      :r="10"
      :w="310"
      :h="155"
    ></slide-verify>
    <button @click="handleClick">在父组件可以点我刷新哦</button>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
//Source https://juejin.cn/post/6844904073955639303
import aa from "@/assets/image/test2.jpg";
import bb from "@/assets/image/test.png";

export default {
  name: "App",
  data() {
    return {
      msg: "",
      bgimgs: [aa, bb],
      //bgimgs  不填入就預設
      text: "向右滑动->",
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 1,
    };
  },
  methods: {
    onSuccess(times) {
      console.log("验证通过，耗时" + times + "毫秒");
      this.msg = "login success, 耗时${(times / 1000).toFixed(1)}s";
    },
    onFail() {
      console.log("验证不通过");
      this.msg = "";
    },
    onRefresh() {
      console.log("点击了刷新小图标");
      this.msg = "";
    },
    onFulfilled() {
      console.log("刷新成功啦！");
    },
    onAgain() {
      console.log("检测到非人为操作的哦！");
      this.msg = "try again";
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      this.$refs.slideblock.reset();
    },
  },
};
</script>

<style>
</style>