<template>
  <div class="mine">
    <div class="content">
      <!-- 顶部标题栏区域 -->
      <top>
        <div class="center">我的</div>
      </top>

      <!-- 用户信息区域 -->
      <user-info></user-info>

      <!-- 用户账户区域 -->
      <user-account></user-account>

      <!-- 功能区域 -->
      <function></function>

      <!-- 服务区域 -->
      <service></service>

      <!-- 退出登录区域 -->
      <login-out @loginOut="loginOut"></login-out>
    </div>
  </div>
</template>

<script>
import Top from "@/components/content/top/Top";

import UserInfo from "./childComps/UserInfo";
import UserAccount from "./childComps/UserAccount";
import Function from "./childComps/Function";
import Service from "./childComps/Service";
import LoginOut from './childComps/LoginOut';

export default {
  components: {
    Top,
    UserInfo,
    UserAccount,
    Function,
    Service,
    LoginOut
  },
  methods: {
    loginOut() {
      console.log('loginOut!!!');
    }
  }
};
</script>

<style scoped>
.mine {
  background-color: #f6f6f6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 48px;
}

.content {
  background-color: #fff;
}
</style>