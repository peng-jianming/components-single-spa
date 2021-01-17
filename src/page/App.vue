<template>
  <!-- postcss-selector-namespace统一添加前缀#manage-permission-spa -->
  <!-- 所以在入口最顶部添加对应id -->
  <div id="manage-permission-spa">
    <div>
      客服权限
    </div>
    <el-divider></el-divider>
    <qiankun-test-router-component />
  </div>
</template>

<script>
import QiankunTestRouterComponent from 'src/page/components/qiankun-test-router';
export default {
  name: 'App',
  components: {
    QiankunTestRouterComponent
  }
};
</script>
