<template>
  <div class="service">
    <function-item v-for="(item, index) in functionList" :key="index" :function-info="item"></function-item>
  </div>
</template>

<script>
import FunctionItem from './FunctionItem';

export default {
  data() {
    return {
      functionList: [
        {
          icon: "green iconfont icon-tijikongjian",
          text: "服务中心"
        }
      ]
    }
  },
  components: {
    FunctionItem
  }
}
</script>

<style scoped>
  .service {
    border-bottom: 13px solid #F6F6F6;
  }
</style>