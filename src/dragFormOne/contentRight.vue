<template>
  <div class="content-right">
    <div class="content">
      <p>控件信息设置</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "content-right",
};
</script>

<style scoped lang="less">
.content-right{
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
  }
}
</style>