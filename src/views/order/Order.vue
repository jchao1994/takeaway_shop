<template>
  <div class="order">
    <!-- 顶部标题栏区域 -->
    <top>
      <div class="center">订单列表</div>
    </top>

    <!-- 主体区域 -->
    <order-main></order-main>
  </div>
</template>

<script>
import Top from "@/components/content/top/Top";

import OrderMain from "./childComps/OrderMain";

export default {
  components: {
    Top,
    OrderMain
  }
};
</script>

<style scoped>
.order {
  left: 0;
  right: 0;
  top: 0;
  bottom: 48px;
  position: absolute;
}
</style>