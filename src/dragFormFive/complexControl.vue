<template>
  <div class="complex-control">
    <div v-for="(item, index) in Item" :key="index"></div>

    <img
      src="@/assets/redclose.svg"
      alt=""
      v-show="showdelIcon && showIndex == Index"
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
      this.$emit("delIndex", this.Index);
    },
  },
};
</script>

<style>
</style>