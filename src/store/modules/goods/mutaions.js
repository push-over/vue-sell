const GOODS_DATA_UPDATE = 'GOODS_DATA_UPDATE';

export default {
  [GOODS_DATA_UPDATE](state, goods) {
    state.goods = goods;
  }
};
