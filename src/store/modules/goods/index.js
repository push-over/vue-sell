import actions from './actions';
import getters from './getters';
import mutations from './mutaions';

const state = {
  goods: [],
  classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
  listHeight: [],
  scrollY: 0,
<<<<<<< HEAD
  selectFoods: [
    {
      id: 1,
      price: 20,
      count: 1
    },
    {
      id: 2,
      price: 30,
      count: 3
=======
  total: [
    {
      id: 1,
      price: 20
    },
    {
      id: 2,
      price: 30
>>>>>>> master
    }
  ],
  totalPrice: 0
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
