<template>
  <!-- postcss-selector-namespace统一添加前缀#manage-permission-spa -->
  <!-- 所以在入口最顶部添加对应id -->
  <div id="manage-permission-spa">
    <div>
      <query-component @search="getAllUser" @reset="reset" />
      <table-component :data="tableData" />
    </div>
    <el-divider></el-divider>
    <qiankun-test-router-component />
  </div>
</template>

<script>
import QiankunTestRouterComponent from 'src/page/components/qiankun-test-router';
import { getAllUser } from 'src/dependencies/api';
import TableComponent from './components/Table';
import QueryComponent from './components/Query';
export default {
  name: 'App',
  components: {
    QiankunTestRouterComponent,
    TableComponent,
    QueryComponent
  },

  data() {
    return {
      tableData: [],
      query: {}
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    async getAllUser(query = this.query) {
      const { data } = await getAllUser({
        query,
        config: {
          headers: {
            Authorization: `Bearer ${this.$root.token}`
          }
        }
      });
      if (data && data.code === 0) {
        this.tableData = data.data.data;
      }
    },
    reset() {
      this.query = {};
      this.getAllUser();
    }
  }
};
</script>
<style scope>
#manage-permission-spa {
  flex: 1;
}
.permission-pagination {
  margin-top: 10px;
  text-align: center;
}
</style>
