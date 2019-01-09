<template>
  <div class="header">
    <div class="content-wrapper">
      <!-- 店铺LOGO -->
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>

      <!-- 店铺内容 -->
      <div class="content">

        <!-- 店铺名称 -->
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>

        <!-- 其他描述 -->
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="this.setDetailShow">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="iconfont">&#xe606;</i>
      </div>
    </div>

    <!-- 店铺公告信息 -->
    <div class="bulletin-wrapper" @click="this.setDetailShow">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="iconfont">&#xe606;</i>
    </div>

    <!-- 店铺背景图 -->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>

    <!-- 店铺简介组件 -->
    <v-detail></v-detail>
  </div>
</template>

<script>
import Detail from './components/Detail';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      seller: state => state.header.seller,
      classMap: state => state.header.classMap
    })
  },

  methods: {
    ...mapActions('header', [
      'getSellerInfo',
      'setDetailShow'
    ])
  },

  created() {
    // 获取店铺信息
    this.getSellerInfo();
  },
   components: {
    'v-detail': Detail // 店铺简介
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/mixin.styl';

  .header
    position relative
    overflow hidden
    color #fff
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            vertical-align middle
            width 30px
            height 18px
            bg-image('../../assets/images/brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            vertical-align middle
            margin-left 6px
            font-size 16px
            line-height 17px
            font-weight bold
        .description
            margin-bottom 10px
            line-height 12px
            font-size 12px
        .support
            .icon
              display inline-block
              vertical-align middle
              width 12px
              height 12px
              margin-right 4px
              background-size 12px 12px
              background-repeat no-repeat
              &.decrease
                bg-image('../../assets/images/decrease_1')
              &.discount
                bg-image('../../assets/images/discount_1')
              &.guarantee
                bg-image('../../assets/images/guarantee_1')
              &.invoice
                bg-image('../../assets/images/invoice_1')
              &.special
                bg-image('../../assets/images/special_1')
            .text
              vertical-align middle
              line-height 12px
              font-size 10px
      .support-count
        position absolute
        right 12px
        bottom 14px
        padding 0 18px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        text-algin center
        .count
          font-size 10px
        .iconfont
          margin-left 2px
          line-height 24px
          font-size 10px
    .bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7, 17, 27, 0.2)
      .bulletin-title
        display inline-block
        vertical-align top
        margin-top 7px
        width 22px
        height 12px
        bg-image('../../assets/images/bulletin')
        background-size 22px 12px
        background-repeat no repeat
      .bulletin-text
        vertical-align top
        margin 0 4px
        font-size 10px
      .iconfont
        position absolute
        font-size 10px
        right 12px
        top 3px
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
</style>
