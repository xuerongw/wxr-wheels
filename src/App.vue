<template>
  <div id="app">
    <knowCanvasTem></knowCanvasTem>
  </div>
</template>

<script>
import knowCanvasTem from "./canvasTransforms/knowCanvasTem";
export default {
  components: { knowCanvasTem},
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
