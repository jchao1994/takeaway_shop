<template>
  <div class="home">
    <scroll class="content">
      <!-- 顶部区域 -->
      <top>
        <div class="iconfont icon-search left" slot="left"></div>
        <div class="center">{{ location }}</div>
        <div class="right" slot="right">
          <span>登录</span>
          <span>|</span>
          <span>注册</span>
        </div>
      </top>

      <!-- 食品分类区域 -->
      <food-category></food-category>

      <!-- 附近商家区域 -->
      <shop-list></shop-list>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import Top from "@/components/content/top/Top";

import FoodCategory from "./childComps/FoodCategory";
import ShopList from "./childComps/ShopList";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Scroll,
    Top,
    FoodCategory,
    ShopList
  },
  methods: {
    ...mapActions(["getLocation", "getFoodCategory", "getShops"])
  },
  created() {
    this.getLocation();
    this.getFoodCategory();
    this.getShops();
  },
  computed: {
    ...mapGetters(["location"])
  }
};
</script>

<style scoped>
  .home {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 48px;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>