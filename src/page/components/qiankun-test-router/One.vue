<template>
  <div>
    one-Component
    <div>
      <router-link to="/permission/manage/one/one" tag="span"
        ><el-button type="primary">One-One-Component</el-button></router-link
      >
      <router-link to="/permission/manage/one/two" tag="span"
        ><el-button type="primary">Two-Two-Component</el-button></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>
