<template>
  <div id="app">
    <guaguale></guaguale>
  </div>
</template>

<script>
import guaguale from "./canvasTransforms/guaguale";
export default {
  components: { guaguale },
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
