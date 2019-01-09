import Vue from 'vue';
import Vuex from 'vuex';
import header from './modules/header/index';
// import goods from './modules/goods';
// import seller from './modules/seller';
// import ratings from './modules/ratings';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header
  }
});
