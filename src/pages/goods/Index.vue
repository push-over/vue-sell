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

      <!-- 商品列表 -->
      <v-item ref="foodsWrapper"></v-item>
      <v-shop-cart :selectFoods="selectFoods"></v-shop-cart>
    </div>
</template>

<script>
import Item from './components/Item';
import ShopCart from './components/ShopCart';
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
    },

    // 添加商品到购物车
    selectFoods() {
      let foods = [];
      this.goods.forEach(good => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
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
      this.foodsScroll = new Bscroll(this.$refs.foodsWrapper.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });

      this.foodsScroll.on('scroll', (pos) => {
          this.changeScrollY(Math.abs(Math.round(pos.y)));
      });
    },

    // 计算高度
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.changListHeight(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.changListHeight(height);
      }
    },

    // 点击自动切换到对应的位置
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      };

      let foodList = this.$refs.foodsWrapper.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    }
  },

  components: {
    'v-item': Item,
    'v-shop-cart': ShopCart
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
</style>
