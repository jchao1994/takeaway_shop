<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <div class="iconfont icon-waimai" slot="item-image"></div>
        <div class="text" slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/search">
        <div class="iconfont icon-search" slot="item-image"></div>
        <div class="text" slot="item-text">搜索</div>
      </tab-bar-item>
      <tab-bar-item path="/order">
        <div class="iconfont icon-icon--copy" slot="item-image"></div>
        <div class="text" slot="item-text">订单</div>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <div class="iconfont icon-wode" slot="item-image"></div>
        <div class="text" slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabBar/TabBar';
import TabBarItem from '@/components/common/tabBar/TabBarItem';

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  .main-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 42px;
    padding: 3px;
    background-color: #fff;
  }
</style>