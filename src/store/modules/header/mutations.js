const SELLER_DATA_UPDATE = 'SELLER_DATA_UPDATE';
const DETAI_SHOW_UPDATE = 'DETAI_SHOW_UPDATE';
const HIDE_DETAIL_UPDATE = 'HIDE_DETAIL_UPDATE';

export default {
  [SELLER_DATA_UPDATE](state, seller) {
    state.seller = seller;
  },

  [DETAI_SHOW_UPDATE](state, value) {
    state.detailShow = value;
  },

  [HIDE_DETAIL_UPDATE](state, value) {
    state.detailShow = value;
  }
};
