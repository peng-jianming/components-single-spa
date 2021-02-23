<template>
  <!-- postcss-selector-namespace统一添加前缀#manage-permission-spa -->
  <!-- 所以在入口最顶部添加对应id -->
  <div id="manage-permission-spa">
    <div>
      <query-component @search="getAllUser" />
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
      tableData: []
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    async getAllUser(params) {
      const { data } = await getAllUser({
        query: params,
        config: {
          headers: {
            Authorization: `Bearer ${this.$root.token}`
          }
        }
      });
      if (data && data.code === 0) {
        this.tableData = data.data.data;
      }
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
