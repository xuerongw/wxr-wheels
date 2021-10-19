<template>
  <div class="dragPage">
    <pageHeader :title="'拖拽表单'" :btn-items="btnItems"></pageHeader>
    <div class="content">
      <!-- 控件组件 -->
      <content-left ref="dragBox"></content-left>
      <!-- 预览组件 -->
      <contentMiddle></contentMiddle>
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
import Sortable from "sortablejs";
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
    // 初始化拖拽
    initSortable() {
      let Left = document.getElementsByClassName("drag");
      const Middle = document.querySelector(".items");
      Left = Array.from(Left);
      Left.map((item) => {
        new Sortable(item, {
          group: {
            name: "shared",
            pull: "clone",
            put: false, // Do not allow items to be put into this list
          },
          animation: 150,
          sort: false, // To disable sorting: set sort to false
          ghostClass: "ghost",
          //************* 拖动对象移动样式
          dragClass: "drag",
        });
      });
      new Sortable(Middle, {
        group: "shared",
        animation: 150,
        ghostClass: "ghost",
        onAdd: function (even) {
          even.item.className='ghost'
         console.log(even.item.className); 
        },
      });
    },
  },
  mounted() {
    this.initSortable();
  },
};
</script>

<style scoped lang="less">
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

.box-item {
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 44px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #d6dee5;
  border-left-color: transparent;
  border-right-color: transparent;
  margin: 0 0 8px;
  .label {
    padding: 12px 0 12px 12px;
    line-height: 20px;
    font-size: 16px;
    color: #3f3f3f;
    word-break: break-all;
    display: block;
    margin: 0;
  }
  .itemplaceholder {
    word-break: break-all;
    color: #98a1a8;
    flex-grow: 1;
    padding: 12px;
    margin: 0;
  }
  &::after {
    // content:url(@/assets/delItem.svg)
  }
}
</style>