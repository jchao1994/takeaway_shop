<template>
  <div class="function-item">
    <span :class="functionInfo.icon"></span>
    <span class="text">{{ functionInfo.text }}</span>
    <span class="iconfont icon-iconfontxiangxia1copy19"></span>
  </div>
</template>

<script>
export default {
  props: {
    functionInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
  .function-item {
    padding: 10px;
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F6F6F6;
  }

  .icon-iconfontxiangxia1copy19 {
    position: absolute;
    right: 10px;
    color: #EBEBEB;
  }

  .red {
    color: red;
  }

  .orange {
    color: orange;
  }

  .green {
    color: green;
  }

  .text {
    margin-left: 8px;
  }
</style>