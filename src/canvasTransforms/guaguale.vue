<template>
  <div>
    <canvas width="100%" height="100%" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "guaguale",
  data() {
    return {
      UrlArray: ["@/assets/onebg.jpeg", "@/assets/towbg.jpeg"],
      imgArr: [],
    };
  },
  methods: {
    loagImg() {
      this.UrlArray.map((item) => {
        let img = new Image();
        img.src = item;
        img.onload = (img) => {
          console.log(1111);
          console.log(img);
          this.imgArr.push(img);
        };
      });
      //   console.log(this.imgArr);
    },
    init() {
      this.$refs.canvas.style.background = `url('${this.imgArr[1]}')`;
    },
  },
  mounted() {
    this.loagImg();
    this.init();
  },
};
</script>

<style>
</style>