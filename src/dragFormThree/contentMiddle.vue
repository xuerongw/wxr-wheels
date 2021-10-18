<template>
  <div class="content-middle" >
    <div class="header"></div>
    <div class="content" >
      <img src="@/assets/phoneHeader.svg" alt="" />
      <div
        v-for="(item, index) in items"
        :key="index"
        class="box-item"
        @click="checkedItem(item, index)"
        :class="{ 'box-item-checked': currentIndex == index }"
      >
        <p class="label">{{ item.label }}</p>
        <span v-if="item.require" class="require">*</span>
        <p class="itemplaceholder">{{ item.placeholder }}</p>
        <!-- <img src="" alt="" class="delItem"> -->
      </div>
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    checkedItem(item, index) {
      this.currentIndex = index;
      this.$emit('checked-item',item)
    },
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
    &::after{
      // content:url(@/assets/delItem.svg)
    }
  }
  .box-item-checked,.box-item:hover {
    border: 1px dashed  #ff9200;
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