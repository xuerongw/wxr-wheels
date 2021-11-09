<template>
  <div id="app">
    <dragPageFive></dragPageFive>
  </div>
</template>

<script>
import dragPageFive from "./dragFormFive/dragPageFive";
export default {
  components: { dragPageFive },
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
  height: 100%;
  min-width: 1100px;
}
</style>
