<template>
  <div class="function">
    <function-item v-for="(item, index) in functionList" :key="index" :function-info="item"></function-item>
  </div>
</template>

<script>
import FunctionItem from "./FunctionItem";

export default {
  data() {
    return {
      functionList: [
        {
          icon: "green iconfont icon-icon-danju-tianchong",
          text: "我的订单"
        },
        {
          icon: "red iconfont icon-huo",
          text: "积分商城"
        }, 
        {
          icon: "orange iconfont icon-huiyuan-",
          text: "硅谷外卖会员卡"
        }
      ]
    };
  },
  components: {
    FunctionItem
  }
};
</script>

<style scoped>
  .function {
    border-bottom: 13px solid #F6F6F6;
  }
</style>