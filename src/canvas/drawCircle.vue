<template>
  <div class="drawCircle">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "drawCircle",
  data() {
    return {};
  },
  methods: {
    init() {
      var ctx = document.getElementById("canvas").getContext("2d");
      ctx.translate(75, 75);

      for (var i = 1; i < 6; i++) {
        // Loop through rings (from inside to out)
        ctx.save();
        ctx.fillStyle = "rgb(" + 51 * i + "," + (255 - 51 * i) + ",255)";

        for (var j = 0; j < i * 6; j++) {
          // draw individual dots
          ctx.rotate((Math.PI * 2) / (i * 6));
          ctx.beginPath();
          ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
          ctx.fill();
        }

        ctx.restore();
      }
    },
  },
  mounted(){
      this.init()
  }
};
</script>

<style>
</style>