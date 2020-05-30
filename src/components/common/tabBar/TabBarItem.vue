<template>
  <div :class="['tab-bar-item', isActive]" @click="itemClick">
    <div>
      <slot name="item-image">
        <div class="iconfont icon-icon-shangpin"></div>
      </slot>
      <slot name="item-text">
        <div class="text">默认</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default() {
        return "";
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) === -1 ? '' : 'active';
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
}

.iconfont {
  text-align: center;
  margin-bottom: 3px;
  font-size: 16px;
}

.text {
  font-size: 12px;
}

.active {
  color: #03a774;
}
</style>