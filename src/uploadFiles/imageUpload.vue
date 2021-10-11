<template>
  <div class="imageUpload">
    <input
      type="file"
      style="display: none"
      ref="fileUpload"
      @change="fileChange"
      accept="image/*"
      multiple
    />

    <div class="uploadBox" @click="openFile">
      <img src="@/assets/add.svg" alt="" />
    </div>
    <div style="height:160px;width:800px">
      <div
        v-for="(item, index) in files"
        :key="index"
        style="display: inline-block;    position: relative;"
        @mouseover="enterShow(index)" @mouseleave="leaveHidden"
      >
        <img :src="item" alt="" class="uploadImg" />
        <div class="masker-del" v-show="currentIndex==index">
          <img src="@/assets/del.svg" alt="" @click="delUpload(index)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      files: [],
      currentIndex:'null'
    };
  },
  methods: {
    openFile() {
      this.$refs.fileUpload.click();
    },
    fileChange() {
      let filsList = Array.from(this.$refs.fileUpload.files);
      filsList.map((item) => {
        let reads = new FileReader();
        reads.readAsDataURL(item);
        reads.onload = (e) => {
          this.files.push(e.target.result);
        };
      });
    },
    enterShow(index){
      this.currentIndex=index
    },
    leaveHidden(){
      this.currentIndex='null'
    },
    delUpload(index){
     this.files.splice(index,1)
    }
  },
};
</script>

<style lang="less" scope>
.imageUpload {
  width: 160px;
  height: 160px;
  .uploadImg {
    width: 160px;
    height: 160px;
    border-radius: 5px;
    margin: 5px;

  }
  .masker-del {
    width: 160px;
    height: 160px;
    display: inline-block;
    background: rgba(0,0,0,0.5);
    border-radius: 5px;
    position: absolute;
    margin: 5px;
    left:0;
    img{
      width:50px;
      height:40px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .uploadBox {
    width: 178px;
    height: 178px;
    border: 2px dashed #dbdbdb;
    border-radius: 5px;
    position: relative;
    img {
      width: 20%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .uploadBox:hover{
     border: 2px dashed #409eff;
  }
}
</style>