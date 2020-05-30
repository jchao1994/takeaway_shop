<template>
  <div class="scroll" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 1;
      }
    },
    click: {
      type: Boolean,
      default() {
        return true;
      }
    },
    listenScroll: {
      type: Boolean,
      default() {
        return false;
      }
    },
    pullup: {
      type: Boolean,
      default() {
        return false;
      }
    },
    pulldown: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });
      if (this.listenScroll) {
        this.scroll.on("scroll", pos => {
          // this.$emit("scroll", pos);
          console.log("scroll");
          console.log(pos);
        });
      }
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            // this.$emit("scrollToEnd");
            console.log("scrollEnd");
          }
        });
      }
      if (this.pulldown) {
        this.scroll.on("touchEnd", pos => {
          // 下拉动作
          if (pos.y > 50) {
            // this.$emit("pulldown");
            console.log("touchEnd");
          }
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  }
};
</script>

<style>
</style>