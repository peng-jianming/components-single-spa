<template>
  <!-- postcss-selector-namespace统一添加前缀#manage-permission-spa -->
  <!-- 所以在入口最顶部添加对应id -->
  <div id="manage-permission-spa">
    <div class="test-css">
      客服权限
    </div>
    <div>
      <router-link to="/permission/manage/one" tag="span">
        <el-button type="primary">One-Component</el-button></router-link
      >
      <router-link to="/permission/manage/two" tag="span"
        ><el-button type="primary">Two-Component</el-button></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.test-css {
  background-color: yellow;
}
</style>
