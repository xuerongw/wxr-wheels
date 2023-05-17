<template>
  <div class="knowCanvas">
    <canvas ref="canvas" width="1000px" height="937px"> </canvas>
    <img src="@/assets/towbg.jpeg" alt="" id="img" style="display: none" />
  </div>
</template>

<script>
export default {
  methods: {
    text() {
      let canvas = this.$refs.canvas;
      let ctx = canvas.getContext("2d");
      // ctx.font="字号 字体样式"
      // ctx.textAlign="start"//start end center	 left	right
      // ctx.textBaseline="middle"//基线 alphabetic	默认 top      hanging文本基线是悬挂基线（五线谱）。 middle（五线谱）  ideographic文本基线是表意基线（五线谱）bottom
      // ctx.fillText('文字',"x","y","maxWidth")//fillStyle gradient createLinearGradient 填充文字
      ctx.font = "20px Georgia";
      // ctx.strokeText("Hello World!",10,50);
      ctx.strokeText("文字", 20, 20); //没有填色的文字，
      console.log(ctx.measureText("hello"));
    },
  },
  mounted() {
    this.text();
  },
};
</script>

<style>
</style>