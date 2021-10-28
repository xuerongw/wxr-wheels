<template>
  <div id="app">
    <canvasTransform></canvasTransform>
  </div>
</template>

<script>
import canvasTransform from "./canvasTransforms/canvasTransform";
export default {
  components: { canvasTransform },
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%
}
</style>
