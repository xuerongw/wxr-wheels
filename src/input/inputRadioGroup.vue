<template>
  <div class="input-radio-group">
    <div v-for="(item, index) in data.radioGroup" :key="index">
      <input type="radio" :value="item.key" name="radio" v-model="data.value"/>
      {{ item.key }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      // default    radioGroup: {
      //   value:'',
      //   radioGroup:[
      //   {
      //     key: "income",
      //     value: "收入",
      //   },
      //   {
      //     key: "pay",
      //     value: "支出",
      //   },
      // ],
      // },
    },
  },
  data(){
      return {
          value:''
      }
  },
 
};
</script>

<style>
</style>