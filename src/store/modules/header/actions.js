// import defaultState from './defaultState';

export default {
  getSellerInfo ({commit}) {
    this._vm.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === 0) {
        commit('SELLER_DATA_UPDATE', response.data);
      }
    }, response => {
      console.log('数据请求失败！');
    });
  },

  setDetailShow ({commit}) {
    commit('DETAI_SHOW_UPDATE', true);
  },

  setHideDetail ({commit}) {
    commit('HIDE_DETAIL_UPDATE', false);
  }
};
