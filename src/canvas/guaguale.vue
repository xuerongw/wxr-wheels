<template>
  <div class="guaguale">
    <canvas
      width="1300"
      height="960"
      ref="canvas"
      @mousedown="getStart"
      @mousemove="getMove"
      @mouseup="getEnd"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "guaguale",
  data() {
    return {
      canvas: "",
      context: "",
      startPoint: {
        x: "",
        y: "",
      },
      endPoint: {
        x: "",
        y: "",
      },
      mouseDown: false,
    };
  },
  methods: {
    init() {
      let bgURl = require("@/assets/towbg.jpeg");
      this.canvas = this.$refs.canvas;
      this.canvas.style.background = `url("${bgURl}")`;
      this.context = this.canvas.getContext("2d");
      this.context.fillStyle = "#808080";
      this.context.fillRect(0, 0, 1300, 960);
      this.context.globalCompositeOperation = "destination-out";
    },
    getStart(e) {
      this.startPoint.x = e.layerX;
      this.startPoint.y = e.layerY;
      this.mouseDown = true;
    },
    getMove(e) {
      if (this.mouseDown) {
        this.endPoint.x = e.layerX;
        this.endPoint.y = e.layerY;
        this.context.beginPath();
        this.context.lineWidth = "60";
        //设置线条两端为圆弧
        this.context.lineCap = "round";
        // this.context.lineJoin = "round";
        this.context.strokeStyle = "blue"; // 蓝色路径
        this.context.moveTo(this.startPoint.x, this.startPoint.y);
        this.context.lineTo(this.endPoint.x, this.endPoint.y);
        //形成一个圆
        // this.context.arc(this.endPoint.x, this.endPoint.y,20,0,2*Math.PI)
        // 填充实心
        this.context.fill();
        this.context.stroke(); // 进行绘制
        this.startPoint.x = e.layerX;
        this.startPoint.y = e.layerY;
      }
    },
    getEnd() {
      this.mouseDown = false;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.guaguale {
  width: 100%;
  height: 100%;
}
</style>