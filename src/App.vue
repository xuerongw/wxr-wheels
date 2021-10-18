<template>
  <div id="app">
    <dragPageThree></dragPageThree>
  </div>
</template>

<script>
import dragPageThree from "@/dragFormThree/dragPageThree.vue";
export default {
  components: { dragPageThree },
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
