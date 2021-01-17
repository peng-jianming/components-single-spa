<template>
  <div id="app">
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
