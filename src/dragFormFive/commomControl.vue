<template>
  <div class="common-control">
    <p class="input-label">
      <span>{{ item.label }}</span>
      <span v-if="item.require" style="color: red; margin-left: 4px">*</span>
    </p>
    <div class="input-right">
      <p class="input-placeholder">
        {{ item.placeholder }}
      </p>
      <img
        class="otherIcon"
        src="@/assets/upload.svg"
        alt=""
        v-if="item.type === 'upload-image' || item.type === 'upload-file'"
      />
      <img
        class="otherIcon"
        src="@/assets/more.svg"
        alt=""
        v-if="item.type === 'input-radio' || item.type === 'input-checkbox'"
      />
    </div>

    <img
      src="@/assets/redclose.svg"
      alt=""
      v-show="showdelIcon&&showIndex==itemIndex"
      class="showdelIcon"
      @click.stop="sendDelIndex"
    />
  </div>
</template>
a
<script>
export default {
  name: "common-control",
  props: {
    item: {
      type: Object,
    },
    itemIndex: {
      type: Number,
    },
    showdelIcon: {
      type: Boolean,
    },
    showIndex: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    sendDelIndex() {
      this.$emit("delIndex", this.itemIndex);
    },
  },
};
</script>

<style>
</style>