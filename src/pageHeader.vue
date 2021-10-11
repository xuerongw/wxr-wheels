<template>
  <div class="page-header">
    <div class="header-left">
      <span>{{ title }}</span>
    </div>
    <div
      v-for="btn in btnItems"
      :key="btn.value"
      @click="btn.callback"
      class="btn"
    >
      {{ btn.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  props: {
    title: {
      type: String,
      default: "",
    },
    btnItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.page-header {
  position: relative;
  box-sizing: border-box;
  height: 60px;
  margin: auto;
  color: #3d464a;
  padding:10px 0 10px 10px;
  box-shadow: 0 2px 2px 0 rgba(66, 64, 86, 0.05);
}
.header-left {
  position: absolute;
  cursor: pointer;
  span {
    display: inline-block;
    max-width: 405px;
    font-size: 20px;
    text-align: left;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.btn {
  width: 80px;
  background-color: #e26736;
  border-radius: 4px;
  padding: 0 12px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #fff;
  margin-left: 12px;
  cursor: pointer;
 position: absolute;
 right:10px;
  &:hover {
    opacity: 0.7;
  }
}
</style>