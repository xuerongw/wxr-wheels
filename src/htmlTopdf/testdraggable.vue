<template>
  <div>
    <div id="id">111</div>
    <div id="dd"></div>
  </div>
</template>

<script>
import Draggable from 'draggable'
export default {
 mounted() {
    var element = document.getElementById("id");
    var options = {
      grid: 10,
      onDrag: function() {},
      group:{name: 'falgs',pull:'clone'}, sort: false
    };
    new Draggable(element, options);

  var elements = document.getElementById("dd");
    var option = {
      grid: 10,
      onDrag: function() {},
      group:{name: 'falgs'}, sort: false
    };
    new Draggable(elements, option);


  }

}
</script>

<style>
#id {
  background-color: rgb(0, 122, 255);
  border-radius:50%;
  font-size: 18px;
  color:white;
  width: 120px;
  height: 120px;
  text-align: center;
  line-height: 120px;
}
#dd{
   background-color: rgb(255, 0, 43);
  font-size: 18px;
  color:white;
  width: 500px;
  height: 502px;
  text-align: center;
  line-height: 120px;
  margin-left:200px
}
</style>