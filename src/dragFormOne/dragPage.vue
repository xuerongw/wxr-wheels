<template>
<!-- 简单的js效果 -->
  <div class="dragPage-One">
    <pageHeader :title="'拖拽表单'" :btn-items="btnItems"></pageHeader>
    <div class="content">
      <!-- 控件组件 -->
      <content-left @drags-item="dragItem"></content-left>
      <!-- 预览组件 -->
      <contentMiddle :items="items" @checked-item="checkedItem"></contentMiddle>
      <!-- 控件详情 -->
      <contentRight></contentRight>
    </div>
  </div>
</template>

<script>
import contentLeft from "./contentLeft";
import contentMiddle from "./contentMiddle";
import contentRight from "./contentRight";
import pageHeader from "@/pageHeader";
export default {
  name: "dragPage",
  components: {
    contentLeft,
    pageHeader,
    contentMiddle,
    contentRight,
  },
  data() {
    return {
      btnItems: [
        {
          label: "保存",
          value: "",
          callback: () => {},
        },
      ],
      items: [],
    };
  },
  methods: {
    dragItem(item) {
      this.items.push(item);
    },
    checkedItem(checkedItem) {
      console.log(checkedItem);
    },
  },
};
</script>

<style scoped>
.dragPage {
  height: 100%;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 100%;
  background-color: #4b4963;
  display: flex;
  justify-content: center;
  padding-top: 38px;
}
</style>