<template>
  <div class="shop">
    {{shopInfo}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg
  // https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png
  computed: {
    ...mapGetters(['shopInfo'])
  }
}
</script>

<style>

</style>