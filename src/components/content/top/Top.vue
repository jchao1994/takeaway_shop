<template>
  <div class="top">
    <slot name="left">
      <div class="left"></div>
    </slot>
    <slot>
      <div class="center">center</div>
    </slot>
    <slot name="right">
      <div class="right"></div>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .top {
    display: flex;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #03A774;
    color: #fff;
  }

  .left {
    width: 36px;
  }

  .right {
    width: 60px;
    font-size: 12px;
  }

  .center {
    flex: 1;
    padding: 0 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>