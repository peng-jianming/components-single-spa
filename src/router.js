import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/permission/manage/one',
      component: () => import('src/components/One'),
      children: [
        {
          path: 'one',
          component: () => import('src/components/OneOne')
        },
        {
          path: 'two',
          component: () => import('src/components/TwoTwo')
        }
      ]
    },
    {
      path: '/permission/manage/two',
      component: () => import('src/components/Two')
    }
  ]
});
