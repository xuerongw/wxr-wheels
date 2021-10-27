<template>
  <div id="app">
    <htmltransfer></htmltransfer>
  </div>
</template>

<script>
import htmltransfer from "@/htmlTopdf/htmltransfer.vue";
export default {
  components: { htmltransfer },
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
