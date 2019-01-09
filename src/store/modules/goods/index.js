import actions from './actions';
import getters from './getters';
import mutations from './mutaions';

const state = {
  goods: [],
  classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
