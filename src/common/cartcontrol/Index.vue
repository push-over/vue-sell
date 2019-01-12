<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="cart-decrease"
        v-show="food.count > 0"
        @click="decreaseCart"
      >
        <i class="iconfont">&#xe607;</i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    <div class="cart-add" @click="addCart">
      <i class="iconfont">&#xe602;</i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props: ['food'],
  methods: {
    // 增加数量
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
    },

    // 减少数量
    decreaseCart(event) {
      if (!event._constructed) {
        return;
      }

      if (this.food.count >= 1) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      transition all 0.4s linear
      &.move-transition
        opacity 1
        transform translate3d(0, 0, 0)
      .iconfont
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
        transition all 0.4s linear
        transform rotate(0)
      &.move-enter, &.move-leave
        opacity 0
        transform translate3d(24px, 0, 0)
        .iconfont
          transform rotate(180deg)
      &.move-leave-active, &.move-leave-to
        opacity 0
        transform translate3d(24px, 0, 0)
        .iconfont
          transform rotate(180deg)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)
    .cart-add
      display inline-block
      padding 6px
      .iconfont
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
</style>
        // console.log(this.food.count);
