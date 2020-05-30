<template>
  <div class="keyword">
    <el-form :inline="true" :model="formData" class="form">
      <el-form-item class="form-input">
        <el-input v-model="formData.keyword" placeholder="请输入商家或美食名称" class="input-item"></el-input>
      </el-form-item>
      <el-form-item class="form-button">
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        keyword: 'test'
      }
    }
  },
  methods: {
    handleSearch() {
      this.$emit('handleSearch', this.formData.keyword);
    }
  }
};
</script>

<style>
  .form {
    display: flex;
    padding: 10px;
  }

  .form-input {
    flex: 1;
    margin: 0;
  }

  .el-form-item__content {
    width: 100%;
  }

  .form-button {
    width: 70px;
    margin: 0;
  }
</style>