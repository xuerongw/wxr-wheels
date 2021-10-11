<template>
  <div class="dragPage">
    <pageHeader :title="'拖拽表单'" :btn-items="btnItems"></pageHeader>
    <div class="content">
          <!-- 控件组件 -->
    <itemList></itemList>
    </div>

  </div>
</template>

<script>
import itemList from "./itemList";
import pageHeader from "@/pageHeader";
export default {
  name: "dragPage",
  components: {
    itemList,
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
.content{
padding:10px 10px;
}
</style>