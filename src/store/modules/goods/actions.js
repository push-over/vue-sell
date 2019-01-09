export default {
  getGoodsInfo ({commit}) {
    this._vm.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === 0) {
        commit('GOODS_DATA_UPDATE', response.data);
      }
    }, response => {
      console.log('数据请求失败！');
    });
  }
};
