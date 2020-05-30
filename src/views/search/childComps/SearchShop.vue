<template>
  <div class="search-shop">
    <shop-item v-for="item in searchShops" :key="item.id" :shop-info="item"></shop-item>
  </div>
</template>

<script>
import ShopItem from '../../home/childComps/ShopItem'

import { mapGetters } from 'vuex';

export default {
  components: {
    ShopItem
  },
  computed: {
    ...mapGetters(['searchShops'])
  }
}
</script>

<style>

</style>