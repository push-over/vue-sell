<template>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods"
              :key="index" class="menu-item"
              :class="{ 'current' : currentIndex === index }"
              @click="selectMenu(index, $event)"
          >
            <span class="text">
              <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li v-for="(food,index) in item.foods" :key="index" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" alt="">
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
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Bscroll from 'better-scroll';
export default {

  created() {
    let scroll = {
      _initScroll: this._initScroll,
      _calculateHeight: this._calculateHeight
    };
    this.getGoodsInfo(scroll);
  },

  computed: {
    ...mapState('goods', {
      goods: state => state.goods,
      classMap: state => state.classMap,
      listHeight: state => state.listHeight,
      scrollY: state => state.scrollY
    }),

    // 计算位置
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },

  methods: {
    ...mapActions('goods', [
      'getGoodsInfo',
      'changListHeight',
      'changeScrollY'
    ]),

    // 滑动效果
    _initScroll() {
      this.meunScroll = new Bscroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new Bscroll(this.$refs.foodsWrapper, {
        probeType: 3
      });

      this.foodsScroll.on('scroll', (pos) => {
          this.changeScrollY(Math.abs(Math.round(pos.y)));
      });
    },

    // 计算高度
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.changListHeight(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.changListHeight(height);
      }
    },

    // 点击切换到对应的位置
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      };

      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/mixin.styl';
  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        padding 0 12px
        line-height 14px
        &.current
          position relative
          z-index 10
          margin-top -1px
          background-color #fff
          font-weight 700
          .txt
            border-none()
        .icon
          display inline-block
          vertical-align middle
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('../../assets/images/decrease_3')
          &.discount
            bg-image('../../assets/images/discount_3')
          &.guarantee
            bg-image('../../assets/images/guarantee_3')
          &.invoice
            bg-image('../../assets/images/invoice_3')
          &.special
            bg-image('../../assets/images/special_3')
        .text
          display table-cell
          width 56px
          vertical-align middle
          // border-1px(rgba(7, 17, 27, 0.1))
          font-size 12px
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
</style>
