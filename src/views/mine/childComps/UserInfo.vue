<template>
  <div class="user-info">
    <img src="@/assets/img/mine/login.png" alt="" class="avatar">
    <div class="login-info">
      <div class="login">
        <div @click="handleLogin">登录/注册</div>
      </div>
      <div class="telephone">
        <div><span class="iconfont icon-shouji"></span>暂无绑定手机号</div>
      </div>
    </div>
    <div class="iconfont icon-iconfontxiangxia1copy19" @click="goDetail"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      console.log('login')
    },
    goDetail() {
      console.log('goDetai')
    }
  }
}
</script>

<style scoped>
  .user-info {
    display: flex;
    border-top: 1px solid #fff;
    padding: 10px;
    background-color: #03A774;
    color: #fff;
    height: 80px;
    align-items: center;
    position: relative;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .login-info {
    margin-left: 10px;
  }

  .login {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .icon-iconfontxiangxia1copy19 {
    position: absolute;
    right: 10px;
  }
</style>