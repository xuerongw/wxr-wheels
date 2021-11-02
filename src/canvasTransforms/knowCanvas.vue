<template>
  <div class="knowCanvas">
    <canvas ref="canvas" width="1000px" height="937px"> </canvas>
    <img src="@/assets/towbg.jpeg" alt="" id="img" style="display: none" />
  </div>
</template>

<script>
export default {
  methods: {
   
  },
  mounted() {
    this.canvasShadow();
  },
};
</script>

<style>
</style>