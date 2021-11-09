<template>
  <div>
    <!--使用draggable组件-->
    <div class="content-left">
      <div class="control-list">
        <div class="basicType">
          <p>基本类型</p>
          <draggable
            v-model="basicType"
            v-bind="{
              group: { name: 'content-left', pull: 'clone', put: '' },
              sort: false,
            }"
            animation="300"
            :move="onMove"
            :clone="deepClone"
          >
            <transition-group>
              <div
                v-for="item in basicType"
                :key="item.type"
                class="control-item"
              >
                {{ item.label }}
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="optionType">
          <p>选项类型</p>
          <draggable
            v-model="optionType"
            v-bind="{
              group: { name: 'content-left', pull: 'clone', put: '' },
              sort: false,
            }"
            animation="300"
            :move="onMove"
          >
            <transition-group>
              <div
                v-for="item in optionType"
                :key="item.type"
                class="control-item"
              >
                {{ item.label }}
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="dateType">
          <p>日期类型</p>
          <draggable
            v-model="dateType"
            v-bind="{
              group: { name: 'content-left', pull: 'clone', put: '' },
              sort: false,
            }"
            animation="300"
            :move="onMove"
          >
            <transition-group>
              <div
                v-for="item in dateType"
                :key="item.type"
                class="control-item"
              >
                {{ item.label }}
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="seniorType">
          <p>高级控件</p>
          <draggable
            v-model="seniorType"
            v-bind="{
              group: { name: 'content-left', pull: 'clone', put: '' },
              sort: false,
            }"
            animation="300"
            :move="onMove"
          >
            <transition-group>
              <div
                v-for="item in seniorType"
                :key="item.type"
                class="control-item"
              >
                {{ item.label }}
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="detailType">
          <p>明细控件</p>
          <draggable
            v-model="detailType"
            v-bind="{
              group: { name: 'content-left', pull: 'clone', put: '' },
              sort: false,
            }"
            animation="300"
            :move="onMove"
          >
            <transition-group>
              <div
                v-for="item in detailType"
                :key="item.type"
                class="control-item"
              >
                {{ item.label }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//导入draggable组件
import draggable from "vuedraggable";
import { basicType } from "./items-mock";
import { optionType } from "./items-mock.js";
import { dateType } from "./items-mock.js";
import { seniorType } from "./items-mock.js";
import { detailType } from "./items-mock.js";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      basicType: [],
      optionType: [],
      dateType: [],
      seniorType: [],
      detailType: [],
      moveId: -1,
    };
  },
  methods: {
    iniData() {
      this.basicType = JSON.parse(JSON.stringify(basicType));
      this.optionType = JSON.parse(JSON.stringify(optionType));
      this.dateType = JSON.parse(JSON.stringify(dateType));
      this.seniorType = JSON.parse(JSON.stringify(seniorType));
      this.detailType = JSON.parse(JSON.stringify(detailType));
    },
    //左边往右边拖动时的事件
    end1(e) {
      var that = this;
      var items = this.arr2.filter(function (m) {
        return m.id == that.moveId;
      });
      //如果左边
      if (items.length < 2) return;
      this.arr2.splice(e.newDraggableIndex, 1);
    },
    //move回调方法
    onMove(e) {
      // console.log(e);
      this.moveId = e.relatedContext.element.id;
      //不允许停靠
      if (e.relatedContext.element.id == 1) return false;
      //不允许拖拽
      if (e.draggedContext.element.id == 4) return false;
      if (e.draggedContext.element.id == 11) return false;
      return true;
    },
    //处理数据深拷贝
    deepClone(e){
       return JSON.parse(JSON.stringify(e));
    }
  },
  mounted() {
    this.iniData();
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
<style scoped>
.content-left {
  display: flex;
}
.control-list {
  width: 358px;
  height: 660px;
  margin: 20px 30px;
  padding: 38px 10px 11px;
  background-color: #4b4963;
  color: white;
  border-radius: 4px;
  border: 1px solid #555367;
  overflow-y: auto;
}
.control-item {
  display: inline-block;
  width: 123px;
  height: 32px;
  padding: 0 12px;
  margin: 5px 6px;
  color: #d4d3e5;
  font-size: 12px;
  border: 1px dashed #6f6e83;
  background-color: #4b4963;
  cursor: move;
  line-height: 30px;
}
::-webkit-scrollbar {
  overflow: visible;
  width: 8px;
  height: 8px;
  padding: 100px 0 0;
  border: 1px solid transparent;
  background-color: #52506a;
  /* background-clip: padding-box; */
}
::-webkit-scrollbar-thumb {
  background-color: rgba(144, 147, 153, 0.3);
  border-color: #434159;
  border-radius: 6px;
}
</style>