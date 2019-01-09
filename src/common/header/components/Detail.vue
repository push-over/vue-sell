<template>
  <transition name="fade">
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <!-- 店铺名称 -->
          <h1 class="name">{{ seller.name }}</h1>

          <!-- 评分组件 -->
          <div class="star-wrapper">
            <v-star :size="48" :score="seller.score"></v-star>
          </div>

          <!-- 优惠信息 -->
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="support">
            <li v-for="(item,index) in seller.supports" :key="index" class="support-item">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{ seller.supports[index].description }}</span>
            </li>
          </ul>

          <!-- 商家公共 -->
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公共</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>

      <!-- 关闭按钮 -->
      <div class="detail-close" @click="this.setHideDetail">
        <i class="iconfont">&#xe604;</i>
      </div>
    </div>
  </transition>
</template>

<script>
import Star from '../../star/Index';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('header', {
      seller: state => state.sellerData,
      detailShow: state => state.detailShow,
      classMap: state => state.classMap
    })
  },

  methods: {
    ...mapActions('header', [
      'setHideDetail'
    ])
  },

  components: {
    'v-star': Star
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../../assets/stylus/mixin.styl';
  .fade-enter-active, .fade-leave-active
    opacity 1
    background rgba(7, 17, 27, 0.8)
    transition: opacity .5s;
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    opacity: 0;
    background rgba(7, 17, 27, 0)
  .detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    overflow auto
    backdrop-filter blur(10px)
    background rgba(7, 17, 27, 0.8)
    .detail-wrapper
      width 100%
      min-height 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        .name
          line-height 16px
          text-align center
          font-size 16px
          font-weight 700
        .star-wrapper
          margin-top 18px
          padding 2px 0
          text-align center
        .title
          display flex
          width 80%
          margin 28px auto 24px auto
          .line
            flex 1
            position relative
            top -6px
            border-bottom 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding 0 12px
            font-size 14px
            font-weight 700
        .support
          width 80%
          margin 0 auto
          .support-item
            padding 0 12px
            margin-bottom 12px
            font-size 0
            &.last-child
              margin-bottom 0
            .icon
              display inline-block
              width 16px
              height 16px
              vertical-align top
              margin-right 6px
              background-size 16px 16px
              background-repeat no-repeat
              &.decrease
                bg-image('../../../assets/images/decrease_2')
              &.discount
                bg-image('../../../assets/images/discount_2')
              &.guarantee
                bg-image('../../../assets/images/guarantee_2')
              &.invoice
                bg-image('../../../assets/images/invoice_2')
              &.special
                bg-image('../../../assets/images/special_2')
            .text
              line-height 16px
              font-size 12px
        .bulletin
          width 80%
          margin 0 auto
          .content
            padding 0 12px
            line-height 24px
            font-size 12px
    .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px
      color rgba(255, 255, 255, 0.5)
</style>
