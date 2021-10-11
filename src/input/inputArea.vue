<template>
  <div class="inputarea">
    <textarea :maxlength="data.maxlength" class="area" v-model="data.currentText">
    </textarea>
    <span class="subscript" v-if="data.showLimit">{{ currentLength }}/{{ data.maxlength }}</span>
  </div>
</template>

<script>
export default {
  name:'input-area',
  props: {
    data:{
      type:Object,
      default() {
        return {
          currentText:'',
          maxlength:30,
          showLimit:false
        };
      },
    },
  },
  data() {
    return {
    };
  },
  computed: {
    currentLength() {
      return this.data.currentText.length;
    },
  },
};
</script>

<style>
.inputarea {
  position: relative;
  display: inline-block;
}
.area {
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  /* resize: none; */
  min-height:40px
}
.area:focus {
  border: 1px solid #409eff;
}
.subscript {
  color: #909399;
  font-size: 12px;
  position: absolute;
  /* display: inline-block; */
  right: 12px;
  bottom: 0;
  margin-bottom: 5px;
}
</style>
//      <input-Area :showLimit="true" ：maxlength="20" :data="data"></input-Area> showLimit是否显示限制数字 maxlength限制长度