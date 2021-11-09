<template>
  <div class="content-right">
    <div class="right-body">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="控件设置" name="first">
          <component :is="chooseItem.type" :data="chooseItem"></component>
        </el-tab-pane>
        <el-tab-pane label="重要信息设置" name="second"></el-tab-pane>
        <el-tab-pane label="模板设置" name="third"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import bus from "@/bus.js";
export default {
  name: "content-right",
  data() {
    return {
      activeName: "first",
      chooseItem: {
        label: "单行文本框",
        type: "input-text",
        value: "",
        placeholder: "请输入",
        require: false,
        maxLength: 20,
      },
    };
  },
  methods: {
    init() {
      bus.$on("chooseItem", (item) => {
        this.chooseItem = item;
      });
    },
    handleClick() {},
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="less">
.content-right {
  width: 334px;
  height: 660px;
  margin: 20px 30px;
  background-color: #4b4963;
  color: white;
  border-radius: 4px;
  border: 1px solid #555367;
  overflow-y: auto;
  .right-body {
    max-height: 580px;
    padding:0 6px ;
  }
}
/deep/.el-tabs__item {
  color: #8e8ca4;
  font-size: 16px;
}
/deep/.el-tabs__item:hover {
  color: #fff;
}
/deep/.el-tabs__item.is-active {
  color: #fff;
}
/deep/.el-tabs__active-bar {
  background-color: #ff9200;
}
</style>