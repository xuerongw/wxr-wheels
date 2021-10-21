<template>
  <div id="app">
    <freeDrag></freeDrag>
  </div>
</template>

<script>
import freeDrag from "@/freeDrags/freeDrag.vue";
export default {
  components: { freeDrag },
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
