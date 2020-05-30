<template>
  <div class="order-main">
    <div class="login">
      <img src="@/assets/img/order/person.png" alt="">
      <div class="message">登录后查看外卖订单</div>
      <div class="login-button">
         <el-button type="primary" @click="handleLogin">立即登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      console.log('login');
    }
  }
}
</script>

<style scoped>
  .order-main {
    position: absolute;
    top: 36px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-50px);
  }

  .login-button {
    margin-top: 6px;
  }
</style>