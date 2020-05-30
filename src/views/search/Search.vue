<template>
  <div class="search">
    <!-- 顶部标题栏区域 -->
    <top>
      <div class="center">搜素</div>
    </top>

    <!-- 关键词区域 -->
    <keyword @handleSearch="handleSearch"></keyword>

    <!-- 搜索结果区域 -->
    <scroll class="content">
      <search-shop></search-shop>
    </scroll>
  </div>
</template>

<script>
import Top from "@/components/content/top/Top";
import Scroll from "@/components/common/scroll/Scroll";

import Keyword from "./childComps/Keyword";
import SearchShop from "./childComps/SearchShop";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Top,
    Keyword,
    SearchShop,
    Scroll
  },
  methods: {
    ...mapActions(["getSearchShops"]),
    handleSearch(keyword) {
      this.getSearchShops({ keyword });
    }
  }
};
</script>

<style scoped>
.search {
  left: 0;
  right: 0;
  top: 0;
  bottom: 48px;
  position: absolute;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 97px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>