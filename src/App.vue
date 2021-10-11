<template>
  <div id="app">
<dragPage></dragPage>
  </div>
</template>

<script>
import dragPage from '@/dragForm/dragPage.vue'
export default {
  components: {dragPage},
  name: "App",
  data() {
    return {
  
    };
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
}
</style>
