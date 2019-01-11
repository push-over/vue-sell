<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="iconfont">&#xe609;</i>
          </div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>
        <div class="desc">另需派送费￥{{ seller.deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <div class="pay">
          ￥{{ seller.minPrice }}元起送
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      seller: state => state.header.seller,
      goods: state => state.goods.goods,
      total: state => state.goods.total
      // totalPrice: state => state.goods.totalPrice
    }),

    totalPrice() {
      let totalPrice = 0;
      this.total.forEach(goods => {
        totalPrice += goods.price;
      });

      return totalPrice;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 50qisong
    width 100%
    height 48px
    .content
      display flex
      background #141d27
      font-size 0
      color rgba(255, 255, 255, 0.4)
      .content-left
        flex 1
        .logo-wrapper
          display inline-block
          vertical-align top
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          box-sizing border-box
          border-radius 50%
          background #141d27
          .logo
              width 100%
              height 100%
              border-radius 50%
              text-align center
              background #2b343c
              .iconfont
                line-height 44px
                font-size 24px
                color #80858a
        .price
          display inline-block
          vertical-align top
          margin-top 12px
          line-height 24px
          padding-right 12px
          box-sizing border-box
          border-right 1px solid rgba(255, 255, 255, 0.1)
          font-size 16px
          font-weight 700
        .desc
          display inline-block
          vertical-align top
          margin 12px 0 0 12px
          line-height 24px
          font-size 10px
      .content-right
        flex 0 0 105px
        width 105px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 12px
          font-weight 700
          background #2b343c
</style>
