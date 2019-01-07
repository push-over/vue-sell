<template>
  <div v-show="header.detailShow" class="detail">
    <div class="detail-wrapper clearfix">
      <div class="detail-main">
        <h1 class="name">{{ header.seller.name }}</h1>
        <div class="star-wrapper">
          <!-- 评分组件 -->
          <v-star :size="48" :score="header.seller.score"></v-star>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="header.closeDetail">
      <i class="iconfont">&#xe604;</i>
    </div>
  </div>
</template>

<script>
import Star from '../../star/Index';

export default {
  props: ['header'],
  components: {
    'v-star': Star
  }
};
</script>

<style lang="stylus" scoped>
  .detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    overflow auto
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
    .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px
</style>
