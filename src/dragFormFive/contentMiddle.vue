<template>
  <div class="drop">
    <div class="header"></div>
    <div class="drop-content">
      <img src="@/assets/phoneHeader.svg" alt="" />
      <draggable
        v-model="dropList"
        group="content-left"
        animation="300"
        :move="onMove"
        @add="onAdd"
      >
        <transition-group>
          <div
            v-for="(item, index) in dropList"
            :key="index"
            class="drop-item"
            @click="choosed(index)"
            :class="[index === chooseIndex ? 'drop-item-choosed' : '']"
            @mouseenter="showDel(item, index)"
            @mouseleave="showDel(item, index)"
          >
            {{ item.label }}
            <span v-if="item.require" style="color: red">*</span>
            <img
              src="@/assets/redclose.svg"
              alt=""
              v-show="showdelIcon && showIndex == index"
              class="showdelIcon"
              @click="delItem(item, index)"
            />
          </div>
        </transition-group>
      </draggable>
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import  bus  from '@/bus.js'
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      dropList: [
        {
          label: "标题",
          type: "input-text",
          value: "",
          placeholder: "请输入",
          require: true,
          maxLength: 20,
        },
      ],
      moveId: -1,
      chooseIndex: 0,
      showdelIcon: false,
      showIndex: "",
    };
  },
  methods: {
    //move回调方法
    onMove(e) {
      this.moveId = e.relatedContext.element.id;
      //不允许停靠
      if (e.relatedContext.element.id == 1) return false;
      //不允许拖拽
      if (e.draggedContext.element.id == 4) return false;
      if (e.draggedContext.element.id == 11) return false;
      return true;
    },
    onAdd(e){
      console.log(e);
     this.choosed(e.newIndex)
    },
    choosed(index) {
      this.chooseIndex = index;
      bus.$emit('chooseItem',this.dropList[index])
    },
    showDel(item, index) {
      if (!item.require) {
        this.showdelIcon = !this.showdelIcon;
        this.showIndex = index;
      } else {
        this.showdelIcon = false;
      }
    },
    delItem(item, index) {
      if (!item.require && this.dropList.length != 1) {
        this.dropList.splice(index, 1);
      } else {
        this.$message({
          message: "该控件不可删除",
          type: "warning",
        });
      }
    },
  },
  mounted() {
    this.choosed(0)
  },
};

Array.prototype.filter =
  Array.prototype.filter ||
  function (func) {
    var arr = this;
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        r.push(arr[i]);
      }
    }
    return r;
  };
</script>

<style>
.drop {
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
.drop-content {
  width: 100%;
  height: 568px;
  background-color: #f1f4f9;
  border-radius: 8px;
  overflow: hidden;
}
.drop-item {
  display: inline-block;
  position: relative;
  background-color: white;
  width: 92%;
  height: 45px;
  padding: 0 12px;
  line-height: 45px;
  border: 1px solid #d6dee5;
  text-align: left;
  margin-bottom: 10px;
}
.drop-item:hover {
  border: 1px dashed #ff9200;
  background-color: rgba(255, 248, 220,0.4);
}
.drop-item-choosed {
  border: 1px dashed #ff9200;
}
.showdelIcon {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
  top: 0;
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