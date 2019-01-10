export default {
  getGoodsInfo ({commit}, scroll) {
    this._vm.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === 0) {
        commit('GOODS_DATA_UPDATE', response.data);

        // DOM渲染完毕后执行
        this._vm.$nextTick(() => {
          scroll._initScroll();
          scroll._calculateHeight();
        });
      }
    }, response => {
      console.log('数据请求失败！');
    });
  },

  changListHeight ({commit}, height) {
    commit('CHANGE_LIST_HEIGHT', height);
  },

  changeScrollY ({commit}, y) {
    commit('CHANGE_SCROLL_Y', y);
  }
};
