<template>
  <div class="dragFormFive">
    <pageHeader :title="'拖拽表单'" :btn-items="btnItems"></pageHeader>
    <div class="content">
      <contentLeft></contentLeft>
      <contentMiddle></contentMiddle>
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
  name: "dragFormFive",
  components: {
    contentLeft,
    contentMiddle,
    contentRight,
    pageHeader,
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
.dragFormFive {
  height: calc(100% - 98px);
  /* overflow: hidden; */
}
.content {
  min-width: 1100px;
  height: 100%;
  background-color: #4b4963;
  display: flex;
  justify-content: center;
  padding-top: 38px;
}
</style>