<template>
  <div class="input-explain">
    <p class="inline-title">控件使用说明</p>
    <div class="inline-wrap">
      <div class="inline-title">
        标题
        <span class="tips">最多20个字</span>
      </div>

      <input
        type="text"
        class="inline-input"
        maxlength="20"
        v-model="data.label"
      />
    </div>
    <div class="inline-wrap">
      <div class="inline-title">
        说明文字
        <span class="tips">最多2000个字</span>
      </div>
      <input type="text" class="inline-area" v-model="data.placeholder" />
    </div>

  </div>
</template>

<script>
export default {
  name: "input-explain",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      showDefault: false,
    };
  },
};
</script>

<style scoped lang="less">
.input-explain {
  padding: 0 12px 0 8px;
  height: 550px;
}

</style>