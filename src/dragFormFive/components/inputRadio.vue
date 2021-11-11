<template>
  <div class="input-radio">
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
      <input type="text" class="inline-input" maxlength="5000" />
    </div>
    <div class="inline-title">
      <p class="inline-title">默认值设置</p>
      <el-checkbox v-model="showDefault"></el-checkbox>
      <span class="require">开启默认值</span>
      <input type="text" class="inline-input" v-show="showDefault" />
    </div>
    <div class="inline-title">
      <div class="inline-title">
        选项设置
        <span class="tips">拖动排序</span>
      </div>
      <div class="options">
        <div class="item" v-for="(item, index) in data.opitons" :key="index">
          <img src="@/assets/list.svg" alt="" class="listIcon" />
          <!-- <el-checkbox  v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
          <input type="text" class="option-input" v-model="item.label" />
          <span class="test"></span>
          <img src="@/assets/optionminus.svg" alt="" class="minusIcon" @click="delItem(index)"/>
          <img src="@/assets/optionadd.svg" alt="" class="addIcon" @click="addItem"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-radio",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      showDefault: false,
      choodeIndex: "",
    };
  },
  methods: {
    delItem(index){
      this.data.opitons.splice(index,1)
    },
    addItem(){
      this.data.opitons.push(
        {
                label: '',
            },
      )
    }
  },
};
</script>

<style scoped lang="less">
.input-radio {
  padding: 0 12px 0 8px;
  height: 580px;
  overflow-y:scroll ;
}
.option-input {
  height: 30px;
  margin: 0 12px;
  padding: 0 12px;
  font-size: 12px;
  color: #fff;
  background-color: #3f3d54;
  border: 1px solid #525065;
  border-radius: 8px;
}
.item {
  width: 90%;
  display: flex;
  padding: 4px 12px;
}
.item:hover {
  border: 1px dashed #f59c25;

  // cursor: pointer;
}
.listIcon {
  width: 20px;
  height: 20px;
  margin-top: 4px;
}
.minusIcon {
  width: 22px;
  height: 25px;
}
.addIcon {
  width: 26x;
  height: 26px;
  margin: 0 10px;
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
.copyCheckBox {
  width: 13px;
  height: 13px;
  margin-left: 4px;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid #dcdfe6;
}
</style>