<template>
  <div id="app">
    <button @click="detailShow = true">打开弹框</button>
    <JsonChange> </JsonChange>
  </div>
</template>

<script>
export default {
  components: {
    // PcSignature: () => import("./canvas/PcSignature"),
    JsonChange: () => import("./json-change/JsonChange"),
  },
  name: "App",
  data() {
    return {
      detailShow: false,
    };
  },
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
