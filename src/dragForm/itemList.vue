<template>
  <div class="itemList">
    <div class="basicType">
      <p>基本类型</p>
      <div v-for="item in basicType" :key="item.type" class="item">
        <span>
          {{ item.label }}
        </span>
      </div>
    </div>
    <div class="optionType">
      <p>选项类型</p>
      <div v-for="item in optionType" :key="item.type" class="item">
        <span>
          {{ item.label }}
        </span>
      </div>
    </div>
    <div class="dateType">
      <p>日期类型</p>
      <div v-for="item in dateType" :key="item.type" class="item">
        <span>
          {{ item.label }}
        </span>
      </div>
    </div>
    <div class="seniorType">
      <p>高级控件</p>
      <div v-for="item in seniorType" :key="item.type" class="item">
        <span>
          {{ item.label }}
        </span>
      </div>
    </div>
    <div class="detailType">
      <p>明细控件</p>
      <div v-for="item in detailType" :key="item.type" class="item">
        <span>
          {{ item.label }}
        </span>
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
  name: "itemList",
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
};
</script>

<style scoped lang="less">
.itemList {
  width: 322px;
  background-color: #4b4963;
  color: white;
  border-radius: 4px;
  p{
    margin:0;
    padding: 0 7px 8px 7px;
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
    span {
      line-height: 30px;
    }
  }
}
</style>