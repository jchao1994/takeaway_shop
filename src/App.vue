<template>
  <div id="app">
    <!-- 主体区域 -->
    <router-view/>

    <!-- 顶部导航栏 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar';

export default {
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
  @import url('./assets/icon/iconfont.css');
</style>
