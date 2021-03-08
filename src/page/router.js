import VueRouter from 'vue-router';

export default new VueRouter({
  routes: [
    {
      path: '/permission/manage/one',
      component: () =>
        import(
          /* webpackChunkName: "One" */ 'src/page/components/qiankun-test-router/One'
        ),
      children: [
        {
          path: 'one',
          component: () =>
            import(
              /* webpackChunkName: "OneOne" */ 'src/page/components/qiankun-test-router/OneOne'
            )
        },
        {
          path: 'two',
          component: () =>
            import(
              /* webpackChunkName: "TwoTwo" */ 'src/page/components/qiankun-test-router/TwoTwo'
            )
        }
      ]
    },
    {
      path: '/permission/manage/two',
      component: () =>
        import(
          /* webpackChunkName: "Two" */ 'src/page/components/qiankun-test-router/Two'
        )
    }
  ]
});
