<template>
  <div class="content-left">
    <div class="content">
      <div class="basicType drag">
        <p>基本类型</p>
        <div
          v-for="item in basicType"
          :key="item.type"
          class="item"
          draggable=""
          :data-type="item.type"
          :data-no="111"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="optionType drag">
        <p>选项类型</p>
        <div
          v-for="item in optionType"
          :key="item.type"
          class="item"
          draggable=""
          :data-type="item.type"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="dateType drag">
        <p>日期类型</p>
        <div
          v-for="item in dateType"
          :key="item.type"
          class="item"
          draggable=""
          :data-type="item.type"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="seniorType drag">
        <p>高级控件</p>
        <div
          v-for="item in seniorType"
          :key="item.type"
          class="item"
          draggable=""
          :data-type="item.type"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="detailType drag">
        <p>明细控件</p>
        <div
          v-for="item in detailType"
          :key="item.type"
          class="item"
          draggable=""
          :data-type="item.type"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { basicType } from "./items-mock";
import { optionType } from "./items-mock.js";
import { dateType } from "./items-mock.js";
import { seniorType } from "./items-mock.js";
import { detailType } from "./items-mock.js";
export default {
  name: "content-left",
  props: {
    basicType: {
      type: Array,
      default() {
        return JSON.parse(JSON.stringify(basicType));
      },
    },
    optionType: {
      type: Array,
      default() {
        return JSON.parse(JSON.stringify(optionType));
      },
    },
    dateType: {
      type: Array,
      default() {
        return JSON.parse(JSON.stringify(dateType));
      },
    },
    seniorType: {
      type: Array,
      default() {
        return JSON.parse(JSON.stringify(seniorType));
      },
    },
    detailType: {
      type: Array,
      default() {
        return JSON.parse(JSON.stringify(detailType));
      },
    },
  },
  methods: {},
};
</script>

<style scoped lang="less">
.content-left {
  width: 334px;
  height: 660px;
  margin: 20px 30px;
  padding: 38px 10px 11px;
  background-color: #4b4963;
  color: white;
  border-radius: 4px;
  border: 1px solid #555367;
  overflow-y: auto;
  .content {
    max-height: 580px;
    p {
      margin: 0;
      padding: 0 7px 8px 7px;
      font-size: 13px;
      text-align: left;
    }
    .basicType,
    .optionType,
    .dateType,
    .seniorType,
    .detailType {
      margin-bottom: 18px;
      padding: 0 0 16px 4px;
    }
    .item {
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
  }
}

</style>