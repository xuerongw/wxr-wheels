<template>
  <div class="input-text">
    <p class="inline-title">控件使用说明</p>
    <div class="inline-wrap">
      <div class="inline-title">
        标题
        <span class="tips">最多20个字</span>
      </div>

      <input type="text" class="inline-input" maxlength="20" v-model="data.label"/>
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        提示语
        <span class="tips">最多20个字</span>
      </div>
      <input type="text" class="inline-input" />
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        <span class="label">是否必填</span>
      </div>
      <div class="inline-title">
        <el-checkbox v-model="checked"></el-checkbox>
        <span class="require">必填</span>
      </div>
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        字数限制
        <span class="tips">最多允许输入5000字</span>
      </div>
      <input type="text" class="inline-input" />
    </div>
     <div class="inline-title">
        <el-checkbox v-model="checked"></el-checkbox>
        <span class="require">默认值设置</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'textDetail',
  props:{
    data:{
      type:Object,
    }
  }
};
</script>

<style scoped lang="less">
.input-text {
  padding: 0 12px 0 8px;
  height: 550px;
  // overflow-y: auto;
}
.inline-wrap {
  margin-bottom: 20px;
}
.inline-title {
  line-height: 22px;
  font-size: 13px;
  word-break: break-all;
  color: #d4d3e5;
  text-align: left;
  margin-bottom: 10px;
  .tips {
    font-size: 12px;
    margin-left: 8px;
    color: #6e6a83;
  }
}
.inline-input {
  width: 90%;
  height: 30px;
  padding: 0 12px;
  font-size: 12px;
  color: #fff;
  background-color: #3f3d54;
  border: 1px solid #525065;
}
/deep/.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff9200;
  border-color: #ff9200;
}
/deep/.el-checkbox__inner{
  background-color:transparent;
}
/deep/.el-checkbox__inner:hover{
   border: 1px solid #fff;
}
.require{
  margin-left:8px
}
</style>