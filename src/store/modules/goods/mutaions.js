const GOODS_DATA_UPDATE = 'GOODS_DATA_UPDATE';
const CHANGE_LIST_HEIGHT = 'CHANGE_LIST_HEIGHT';
const CHANGE_SCROLL_Y = 'CHANGE_SCROLL_Y';

export default {
  [GOODS_DATA_UPDATE](state, goods) {
    state.goods = goods;
  },

  [CHANGE_LIST_HEIGHT](state, height) {
    state.listHeight.push(height);
  },

  [CHANGE_SCROLL_Y](state, y) {
    state.scrollY = y;
  }
};
