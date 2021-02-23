<template>
  <el-form inline :model="form" label-width="80px">
    <el-form-item label="用户名">
      <user-chooser-component v-model="form.user_name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { pickBy } from 'lodash';
import UserChooserComponent from 'src/modules/components/UserChooser';
export default {
  components: {
    UserChooserComponent
  },
  data() {
    return {
      form: {
        user_name: ''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit('search', pickBy(this.form));
    }
  }
};
</script>
