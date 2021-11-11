<template>
  <div class="input-Title">
   <p class="inline-title">控件使用说明</p>
    <div class="inline-wrap">
           <div class="inline-wrap">
      <div class="inline-title">
        提示语
        <span class="tips">最多20个字</span>
      </div>
      <input type="text" class="inline-input" v-model="data.placeholder" maxlength="20"/>
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'input-Title',
  props:{
    data:{
      type:Object,
    }
  }
}
</script>

<style scoped lang="less">
.input-Title {
  padding: 0 12px 0 8px;
  height: 550px;
  /* overflow-y: auto; */
}

</style>