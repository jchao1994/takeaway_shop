<template>
  <div class="shop-item" @click="goShop">
    <img src="@/assets/img/nav/2.jpg" class="image">
    <div class="center">
      <div class="top">
        <span class="top-left">品牌</span>
        <span class="top-right">{{ shopInfo.name }}</span>
      </div>
      <div class="middle">
        <span class="middle-left">{{ shopInfo.rating }}</span>
        <span>月售{{ shopInfo.recent_order_num }}单</span>
      </div>
      <div class="bottom">
        <span>¥{{ shopInfo.float_minimum_order_amount }}</span>
        <span class="bottom-center">/</span>
        <span>配送费约¥{{ shopInfo.float_delivery_fee }}</span>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <span class="right-top-item">票</span>
        <span class="right-top-item">准</span>
        <span class="right-top-item">保</span>
      </div>
      <div class="right-bottom">
        <span class="right-bottom-right">准时达</span>
        <span class="right-bottom-left">{{ deliveryMode }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    deliveryMode() {
      return this.shopInfo.delivery_mode ? this.shopInfo.delivery_mode.text : '蜂鸟专送';
    }
  },
  methods: {
    ...mapMutations(['editShopInfo']),
    goShop() {
      this.editShopInfo({
        shopInfo: this.shopInfo
      })
      this.$router.push('/shop');
    }
  }
}
</script>

<style scoped>
  .shop-item {
    display: flex;
    font-size: 12px;
    border-bottom: 3px solid #eee;
  }

  .image {
    width: 100px;
    height: 100px;
  }

  .center {
    flex: 1;
    padding: 5px 10px;
  }

  .top {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .top-left {
    background-color: rgb(240, 240, 55);
  }

  .top-right {
    font-size: 14px;
    font-weight: 600;
    margin-left: 3px;
    width: 120px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .middle {
    margin-top: 18px;
    color: #A8A8A8;
  }

  .middle-left {
    color: orange;
    margin-right: 5px;
  }

  .bottom {
    margin-top: 8px;
    color: #A8A8A8;
  }

  .bottom-center {
    margin: 0 3px;
  }

  .right {
    width: 100px;
  }

  .right-top {
    margin-top: 15px;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 5px;
  }

  .right-top-item {
    background-color: #eee;
    margin: 0 2px;
    padding: 2px;
  }

  .right-bottom {
    margin-top: 18px;
    font-size: 10px;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 5px;
  }

  .right-bottom-left {
    background-color: #38AA86;
    color: #fff;
    padding: 0 2px;
    border-radius: 3px;
  }

  .right-bottom-right {
    color: #98CDBF;
    padding: 0 2px;
    border-radius: 3px;
    border: 1px solid #aaa;
    margin-left: 3px;
  }
</style>