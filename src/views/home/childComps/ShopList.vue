<template>
  <div class="shop-list">
    <!-- 标签区域 -->
    <div class="shop-top">
      <span class="iconfont icon-kuozhan"></span>
      <span>附近商家</span>
    </div>

    <!-- 主体区域 -->
    <div class="shop-main">
      <shop-item v-for="item in shops" :key="item.id" :shop-info="item"></shop-item>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

import ShopItem from './ShopItem'

export default {
  computed: {
    ...mapGetters([
      'shops'
    ])
  },
  components: {
    ShopItem
  }
}
</script>

<style scoped>
  .shop-top {
    padding: 10px;
    font-size: 14px;
  }

  .icon-kuozhan {
    font-size: 10px;
    margin-right: 10px;
  }
</style>