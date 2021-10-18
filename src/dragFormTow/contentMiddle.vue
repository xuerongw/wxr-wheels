<template>
  <!-- 插件实现 -->
  <div class="content-middle">
    <div class="header"></div>
    <div class="content">
      <img src="@/assets/phoneHeader.svg" alt="" />
      <ul class="itemBox">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="box-item"
          :class="{ 'box-item-checked': currentIndex == index }"
          draggable="true"
        >
          <p class="label">{{ item.label }}</p>
          <!-- <span v-if="item.require" class="require">*</span> -->
          <p class="itemplaceholder">{{ item.placeholder }}</p>
        </li>
      </ul>
      <!-- <div> -->
      <!-- <img src="" alt="" class="delItem"> -->
      <!-- </div> -->
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      templateData: [],
      currentIndex: 0,
      draging: "",
      sortable: null, // 拖拽对象
      sortData: [], // 拖拽数据
    };
  },
  methods: {
    // 初始化拖拽
    initSortable() {
      this.sortData = [...this.items];
      const el = document.querySelector(".itemBox");
      console.log(el);
      //创建拖拽对象
      this.sortable = Sortable.create(el, {
        sort: true, //是否可进行拖拽排序
        animation: 150,
        //拖拽完成，移除拖拽之前的位置上的元素，在拖拽之后的位置上添加拖拽元素
        onEnd: ({ newIndex, oldIndex }) => {
          const val = this.sortData[oldIndex];
          this.sortData.splice(oldIndex, 1);
          this.sortData.splice(newIndex, 0, val);
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
.content-middle {
  width: 334px;
  height: 660px;
  margin: 20px 30px;
  padding: 38px 10px 11px;
  text-align: center;
  border-radius: 47px;
  border: 4px double hsla(0, 0%, 100%, 0.1);
}
.header::before {
  content: "";
  display: block;
  width: 60px;
  height: 6px;
  margin: 0 auto 24px;
  border-radius: 3px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
}
.content {
  height: 568px;
  background-color: #f1f4f9;
  border-radius: 8px;
  overflow: hidden;
  .itemBox {
    padding: 0;
  }
  .require {
    color: red;
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
  .box-item-checked,
  .box-item:hover {
    border: 1px dashed #ff9200;
  }
}
.button::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  margin: 10px auto 0;
  border-radius: 50%;
  border: 4px double hsla(0, 0%, 100%, 0.1);
}
</style>