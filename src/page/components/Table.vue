<template>
  <el-table :data="data" border style="width: 100%">
    <el-table-column prop="user_name" label="用户名"></el-table-column>
    <el-table-column label="岗位">
      <template #default="scope">
        {{ scope.row.post | mapPost }}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template #default="scope">
        <permission-component :data="scope.row" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import PostEnums from 'src/dependencies/enmus/Post';
import PermissionComponent from './Permission';
export default {
  components: {
    PermissionComponent
  },
  filters: {
    mapPost(val) {
      return PostEnums.find(({ id }) => id === val).value;
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
