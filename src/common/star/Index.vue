<template>
  <!-- 评分组件 -->
  <div class="star" :class="starype">
    <span v-for="(itemClass,key) in itemClasses" :class="itemClass" class="star-item" :key="key"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  props: ['size', 'score'],

  computed: {
    starype() {
      return 'star-' + this.size;
    },

    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;

      let integer = Math.floor(score);

      // 实★
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }

      // 半✰
      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      // 空☆
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixin.styl';

  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../assets/images/star48_on')
        &.half
          bg-image('../../assets/images/star48_half')
        &.off
          bg-image('../../assets/images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../assets/images/star36_on')
        &.half
          bg-image('../../assets/images/star36_half')
        &.off
          bg-image('../../assets/images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../assets/images/star24_on')
        &.half
          bg-image('../../assets/images/star24_half')
        &.off
          bg-image('../../assets/images/star24_off')
</style>
