<template>
  <div>
    <el-button type="text" size="small" @click="dialogTableVisible = true"
      >编辑权限</el-button
    >
    <el-dialog
      title="客服权限设置"
      :visible.sync="dialogTableVisible"
      @opened="getPermission"
    >
      <el-tabs tab-position="left">
        <el-tab-pane
          v-for="{ title, _id, children } in treeData"
          :key="_id"
          :label="title"
        >
          <div v-for="item in children" :key="item._id">
            <div>
              <h4 class="permission-title">{{ item.title }}</h4>
              <div>
                <el-checkbox-group v-model="permission">
                  <el-checkbox
                    v-for="params in item.children"
                    :key="params._id"
                    :label="params.permission_code"
                    >{{ params.title }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="permission-handle">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getPermission, patchUserPermission } from 'src/dependencies/api';
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      treeData: [],
      permission: this.data.permission || []
    };
  },
  methods: {
    async getPermission() {
      const { data } = await getPermission();
      if (data && data.code === 0) {
        this.treeData = data.data;
      }
    },
    async submit() {
      const { data } = await patchUserPermission({
        params: {
          userId: this.data._id
        },
        data: { permission: this.permission }
      });
      if (data && data.code === 0) {
        this.dialogTableVisible = false;
        this.$notify({
          title: '成功',
          message: '更新成功',
          type: 'success'
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.permission-handle {
  margin-top: 20px;
  text-align: right;
  padding-right: 20px;
}
.permission-title {
  padding-bottom: 10px;
}
</style>
