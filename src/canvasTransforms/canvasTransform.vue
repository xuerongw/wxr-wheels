<template>
  <div>
    <canvas
      id="canvas"
      width="400px"
      height="250px"
      @click="diffusion"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "canvasTransform",
  data() {
    return {
      canvas: "",
      context: "",
      urlArr: [
        "https://www.kkkk1000.com/images/globalCompositeOperation/bg2.png",
        "https://www.kkkk1000.com/images/globalCompositeOperation/clear.png",
      ],
      imgArr: [],
      flag: false, // flag 用来限制 点击事件，一张图片只会产生一次效果
      index: 0,
      res: [],
      width: 0,
      speed: 50,
      x: Number,
      y: Number,
    };
  },
  methods: {
    loadImg() {
      // 每次给 load 函数传入一个图片路径，来加载图片
      this.load(this.urlArr[this.index]);
      // 最后返回保存所有真实图片的数组
      return this.res;
    },
    load(url) {
      // 如果 index 等于 urlArr.length，
      // 表示加载完 全部图片了，就结束 load函数
      if (this.index == this.urlArr.length) {
        // 加载完全部图片，调用 init 函数
        return;
      }

      var img = new Image();
      img.src = url;
      // 不管当前图片是否加载成功，都要加载下一张图片
      img.onload = this.next(img);
      img.onerror = function () {
        console.log(this.res[this.index] + "加载失败");
        this.next(img);
      };
      // next 用来加载下一张图片
    },
    next(img) {
      // 把加载后的图片，保存到 res 中
      this.res[this.index] = img;
      this.load(this.urlArr[++this.index]);
    },
    init() {
      this.canvas = document.getElementById("canvas");
      this.context = this.canvas.getContext("2d");
      this.context.drawImage(this.imgArr[0], 0, 0, 400, 250);

      this.canvas.style.background =
        'url("https://www.kkkk1000.com/images/globalCompositeOperation/bg.jpg")';
      this.flag = true;
    },
    diffusion(e) {
      if (this.flag) {
        // this.flag = false;
        this.context.globalCompositeOperation = "destination-out";
        //告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
        window.requestAnimationFrame(this.draw);
        // 根据鼠标坐标，画扩散效果
        this.draw(e);
      }
    },
    draw(e) {
      // 这里不一定需要是 1800 ，但必须是一个足够大的数，可以扩散出整张背景图
      if (this.width > 1800) {
        this.flag = true;
        return;
      }
      this.width += this.speed;
      // 获取鼠标相对于 canvas 的坐标
      this.x = e.layerX;
      this.y = e.layerY;
      // 画不规则形状的图片，逐渐增大图片尺寸
      this.context.drawImage(
        this.imgArr[1],
        this.x - this.width / 2,
        this.y - this.width / 2,
        this.width,
        this.width
      );
      //   window.requestAnimationFrame(this.draw);
    },
  },
  mounted() {
    this.imgArr = this.loadImg();
    this.init();
  },
};
</script>

<style>
canvas {
  /* 设置鼠标的光标是一张图片， 16和22 分别表示热点的X坐标和Y坐标 */
  /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor/url */
  cursor: url("https://www.kkkk1000.com/images/globalCompositeOperation/mouse.png")
      16 22,
    auto;
  /* background: url("https://www.kkkk1000.com/images/globalCompositeOperation/bg.jpg"); */
}
</style>
// https://segmentfault.com/a/1190000016214908 学习地址