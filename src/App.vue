<template>
  <div id="app">
    <knowCanvas></knowCanvas>
  </div>
</template>

<script>
import knowCanvas from "./canvasTransforms/knowCanvas";
export default {
  components: { knowCanvas },
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
