import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  seller: [],
  detailShow: false,
  classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
