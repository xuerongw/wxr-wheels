<template>
  <div class="input-text">
    <p class="inline-title">控件使用说明</p>
    <div class="inline-wrap">
      <div class="inline-title">
        标题
        <span class="tips">最多20个字</span>
      </div>
      <input
        type="text"
        class="inline-input"
        maxlength="20"
        v-model="data.label"
      />
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        提示语
        <span class="tips">最多20个字</span>
      </div>
      <input
        type="text"
        class="inline-input"
        v-model="data.placeholder"
        maxlength="20"
      />
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        <span class="label">是否必填</span>
      </div>
      <div class="inline-title">
        <el-checkbox v-model="data.require"></el-checkbox>
        <span class="require">必填</span>
      </div>
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        字数限制
        <span class="tips">最多允许输入5000字</span>
      </div>
      <input type="text" class="inline-input" maxlength="5000"/>
    </div>
    <div class="inline-title">
      <p class="inline-title">默认值设置</p>
      <el-checkbox v-model="showDefault"></el-checkbox>
      <span class="require">开启默认值</span>
      <input type="text" class="inline-input" v-show="showDefault" />
    </div>
  </div>
</template>

<script>
export default {
  name: "input-text",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      showDefault: false,
    };
  },
};
</script>

<style scoped lang="less">
.input-text {
  padding: 0 12px 0 8px;
  height: 550px;
}

/deep/.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff9200;
  border-color: #ff9200;
}
/deep/.el-checkbox__inner {
  background-color: transparent;
}
/deep/.el-checkbox__inner:hover {
  border: 1px solid #fff;
}
.require {
  margin-left: 8px;
}
</style>