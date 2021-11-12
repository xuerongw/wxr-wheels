<template>
  <div class="content-right">
    <div class="right-body">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="控件设置" name="first">
          <component :is="type" :data="chooseItem"></component>
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
        label: "标题",
        type: "input-title",
        value: "",
        placeholder: "请输入",
        require: true,
        maxLength: 20,
      },
      type: "input-title",
    };
  },
  methods: {
    init() {
      bus.$on("chooseItem", (item) => {
        this.chooseItem = item;
        this.type = this.componentType(item.type);
      });
    },
    componentType(type) {
      switch (type) {
        case "input-title":
          return "input-title";
        case "input-text":
          return "input-text";
        case "input-area":
          return "input-text";
        case "input-explain":
          return "input-explain";
        case "input-number":
          return "input-number";
        case "input-money":
          return "input-money";
        case "upload-image":
          return "upload-image";
        case "upload-file":
          return "upload-file";
        case "urgent-level":
          return "urgent-level";
        case "input-radio":
          return "input-radio";
        case "date-picker":
          return "date-picker";
      }
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
  min-width: 334px;
  height: 660px;
  margin: 20px 30px;
  background-color: #4b4963;
  color: white;
  border-radius: 4px;
  border: 1px solid #555367;
  overflow-y: auto;
  .right-body {
    max-height: 580px;
    padding: 0 6px;
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