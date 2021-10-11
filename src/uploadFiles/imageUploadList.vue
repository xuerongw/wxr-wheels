<template>
  <div class="image-upload-list">
    <el-button
      size="small"
      type="primary"
      class="submitButton"
      @click="openFile"
      >点击上传</el-button
    >
    <p>{{ data.explain }}</p>
    <input
      type="file"
      ref="fileUpload"
      style="display: none"
      multiple="multiple"
      @change="fileChange"
    />
    <div>
      <div v-for="(item, index) in files" :key="index" class="fileBox">
        <img :src="item.src" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          explain: "只能上传jpg/png文件，且不超过500kb",
        };
      },
    },
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    openFile() {
      this.$refs.fileUpload.click();
    },
    fileChange() {
      let filesList = [];
      filesList = Array.from(this.$refs.fileUpload.files);
      filesList.map((item) => {
        let reads = new FileReader();
        let imageData = {};
        imageData.name = item.name;
        reads.readAsDataURL(item);
        reads.onload = (e) => {
          imageData.src = e.target.result;
          this.files.push(imageData);
        };
      });
    },
  },
};
</script>

<style lang="less" scope>
.image-upload-list {
  width: 360px;
  .submitButton {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  p {
    font-size: 12px;
    color: #606266;
  }
  .fileBox {
    height: 72px;
    border: 1px solid #c0ccda;
    padding: 10px 10px;
    img {
      width: 70px;
      height: 70px;
      vertical-align: middle;
      margin-right: 5px;
      float: left;
    }
    span {
      font-size: 14px;
      line-height: 92px;
    }
  }
}
</style>