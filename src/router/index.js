import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../pages/goods/Index')
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import('../pages/ratings/Index')
    },
    {
      path: '/seller',
      name: 'seller',
      component: () => import('../pages/seller/Index')
    }
  ]
});
