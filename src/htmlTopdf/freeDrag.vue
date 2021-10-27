<template>
  <div>
    <div class="drag-wrap">
      <div class="content">
        <div>
          <p
            v-for="(item, index) in controlArray"
            :key="index"
            draggable=""
            class="control"
            @dragstart="dragStart(item)"
          >
            {{ item.label }}
          </p>
        </div>
        <div class="dropBox" @dragover="dragOver" @drop="drop">
          <vue-draggable-resizable
            v-for="(item, index) in dragsData"
            :w="item.w"
            :h="item.h"
            :x="item.x"
            :y="item.y"
            :min-width="150"
            :min-height="50"
            :resizable="true"
            :key="index"
            :parent="true"
            @resizestop="
              (left, top, width, height) =>
                onResizstop(item, left, top, width, height)
            "
          >
            <!-- 以上方式才可以正确的传参 来自csdn的大佬-->

            <p class="input">
              {{ item.label }}
            </p>
            <img
              src="@/assets/close.svg"
              alt=""
              class="closeIcon"
              @click="delItem(index)"
            />
          </vue-draggable-resizable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css"; //要引入否则没有拖拽的样式
export default {
  components: {
    VueDraggableResizable,
  },
  data() {
    return {
      dragsData: [
        // {
        //   label: "相对方名称",
        //   value: "",
        //   required: true,
        //   key: "name",
        //   _comp: "input-text",
        //   x:'',
        //   y:'',
        // },
      ],
      controlArray: [
        {
          label: "相对方名称",
          value: "",
          required: true,
          key: "name",
          _comp: "input-text",
          x: "",
          y: "",
          w: 150,
          h: 50,
        },
        {
          label: "开户行",
          value: "",
          required: true,
          key: "bankName",
          _comp: "input-text",
          x: "",
          y: "",
          w: 150,
          h: 50,
        },
        {
          label: "银行账号",
          value: "",
          required: true,
          key: "bankNumber",
          _comp: "input-text",
          x: "",
          y: "",
          w: 150,
          h: 50,
        },
      ],
      currentDrag: "",
      currentKey: "",
    };
  },
  methods: {
    choose(item, even) {
      console.log(item, even);
    },
    //开始拖拽
    dragStart(item) {
      this.currentDrag = item;
    },
    //拖拽经过
    dragOver(ev) {
      ev.preventDefault();
    },
    //放下
    drop(ev) {
      this.currentDrag.x = ev.offsetX;
      this.currentDrag.y = ev.offsetY;
      ev.preventDefault();
      this.dragsData.push(this.currentDrag);
    },
    //缩放大小
    onResizstop(item, left, top, width, height) {
      item.x = left;
      item.y = top;
      item.w = width;
      item.h = height;
    },

    delItem(index) {
      this.$delete(this.dragsData, index);
      //delete去删除元素数组原来的位置被empty占据，数组长度不变，而用vue的this.$delete直接将数组内的元素给删除了
      // delete this.dragsData[index];
    },
  },
};
</script>

<style scoped>
/* .input {
  border: 1px dashed black;
} */
.drag-wrap {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
}
.control {
  display: inline-block;
  margin: 10px 10px;
}
.dropBox {
  width: 100%;
  height: 800px;
  background-color: blanchedalmond;
}
.closeIcon {
  width: 14px;
  height: 14px;
  position: absolute;
  right: -7px;
  top: -7px;
}
</style>