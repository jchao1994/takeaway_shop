<template>
  <div class="food-category">
    <el-carousel :autoplay="false" trigger="click" height="280px" class="carousel" arrow="never">
      <el-carousel-item class="carousel-item">
        <div class="category-item" v-for="item in foodCategoryFirst" :key="item.id">
          <img src="@/assets/img/nav/1.jpg">
          <div class="category-title">
            {{ item.title }}
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="carousel-item">
        <div class="category-item" v-for="item in foodCategorySecord" :key="item.id">
          <img src="@/assets/img/nav/1.jpg">
          <div class="category-title">
            {{ item.title }}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'foodCategoryFirst',
      'foodCategorySecord'
    ])
  }
}
</script>

<style>
  .carousel {
    border-bottom: 15px solid #eee;
  }

  .carousel .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
  }

  .carousel .is-active .el-carousel__button{
    background-color: #03A774;
  }

  .carousel-item {
    display: flex;
    flex-wrap: wrap;
    height: 250px;
  }

  .category-item {
    width: 25%;
  }

  .category-title {
    margin-top: 3px;
    text-align: center;
    font-size: 14px;
  }
</style>