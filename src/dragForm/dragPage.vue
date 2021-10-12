<template>
  <div class="dragPage">
    <pageHeader :title="'拖拽表单'" :btn-items="btnItems"></pageHeader>
    <div class="content">
      <!-- 控件组件 -->
      <content-left></content-left>
      <!-- 预览组件 -->
<contentMiddle></contentMiddle>
    </div>
  </div>
</template>

<script>
import contentLeft from "./contentLeft";
import contentMiddle from "./contentMiddle";
import pageHeader from "@/pageHeader";
export default {
  name: "dragPage",
  components: {
    contentLeft,
    pageHeader,
    contentMiddle
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
    };
  },
};
</script>

<style scoped>
.dragPage {
  height: 100%;
  overflow: hidden;
}
.content {
  width:100%;
  height:100%;
  background-color: #4b4963;
  display: flex;
  justify-content: center;
  padding-top:38px
}
</style>