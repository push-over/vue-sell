<template>
  <div class="foods-wrapper" ref="foodsWrapper">
    <ul>
      <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
        <h1 class="title">{{ item.name }}</h1>
        <ul>
          <li v-for="(food,index) in item.foods" :key="index" class="food-item border-1px">
            <div class="icon">
              <img width="57" height="57" :src="food.icon" alt>
            </div>
            <div class="content">
              <h2 class="name">{{ food.name }}</h2>
              <p class="desc">{{ food.description }}</p>
              <div class="extra">
                <span class="count">月售{{ food.sellCount }}份</span>
                <span>好评率{{ food.rating }}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{ food.price }}</span>
                <span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <v-cart-control :food="food"></v-cart-control>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import CartControl from '../../../common/cartcontrol/Index';
import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState('goods', {
      goods: state => state.goods
    })
  },

  components: {
    'v-cart-control': CartControl
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../../assets/stylus/mixin.styl';

  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159p)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>
