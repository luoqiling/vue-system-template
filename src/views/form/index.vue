<template>
  <div class="form-container">
    <el-page-header @back="$router.back()" content="Form" />
  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  padding: 18px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #E7E7E7;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #404040;
}
</style>
