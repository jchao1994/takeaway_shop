<template>
  <div class="login-out">
    <div class="text" @click="loginOut">退出登录</div>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$emit('loginOut');
    }
  }
}
</script>

<style scoped>
 .text {
   height: 40px;
   line-height: 40px;
   text-align: center;
   background-color: #E84937;
   color: #fff;
 }
</style>