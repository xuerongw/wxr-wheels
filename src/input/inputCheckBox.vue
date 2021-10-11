<template>
  <div class="inputCheckBox" :class="[data.disabled? 'disabled' : '']">
    <input type="checkbox" v-model="data.value" :disabled="data.disabled" />
    <span :class="[data.value ? 'checked' : '']">
      {{data.label}}
    </span>
  </div>
</template>

<script>
export default {
  name:'input-checkBox',
  props: {
    data:{
      type:Object,
      default(){
        return {
          disabled:false,
          value:"",
          label:''
        }
      }
    }
  },
  data() {
    return { 
        };
  },
  methods: {
  },
};
</script>

<style>
.disabled{
    cursor: not-allowed;
    color:#dcdfe6
}
.checked {
  color: #409eff;
}
</style>
//  <input-checkBox :data="checkData"></input-checkBox>
//  checkData:{
         disabled:false,
          value:"",
          label:'dd'
      }