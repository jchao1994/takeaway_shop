<template>
  <div class="user-account">
    <div class="item">
      <div>
        <span class="balance">0.00</span>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="item">
      <div>
        <span class="discount">0</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="item last">
      <div>
        <span class="point">0</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .user-account {
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 10px;
   border-bottom: 15px solid #F6F6F6;
 }

 .item {
   flex: 1;
   text-align: center;
   border-right: 2px solid #eee;
   padding: 5px 0;
 }

 .item.last {
   border: none;
 }

 .balance, .discount, .point {
   font-size: 24px;
   font-weight: 600;
 }

 .balance {
   color: orange;
 }

  .discount {
    color: red;
  }

  .point {
    color: greenyellow;
  }
</style>