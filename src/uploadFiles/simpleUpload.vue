<template>
  <div class="input-upload">
    <!-- 点击按钮触发文件选择 -->
    <el-button type="primary" @click="openFile" class="submitButton"
      >点击上传</el-button
    >
    <!-- 只能传一个文件  -->
    <!-- <input
      type="file"
      ref="fileUpload"
      style="display: none"
      @change="fileChange"
    /> -->
    <!-- 传多个文件 -->
    <input
      type="file"
      ref="fileUpload"
      style="display: none"
      multiple="multiple"
      @change="fileChange"
    />
    <!-- 限制文件传输类型 -->
    <!-- <input
      type="file"
      ref="fileUpload"
      style="display: none"
      accept="image/*"
      @change="fileChange"
    /> -->
    <p>{{ data.explain }}</p>
    <div class="fileList">
      <div class="fileBox" v-for="(item, index) in files" :key="index">
        <img src="@/assets/file.svg" alt="" class="file" />
        <span> {{ item.name }}</span>
        <img
          src="@/assets/close.svg"
          alt=""
          class="close"
          style="float: right"
          @click="deleteFile(index)"
        />
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
          maximum: "",
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
      if (
        this.data.maximum &&
        this.$refs.fileUpload.files.length > this.data.maximum
      ) {
        this.$message({
          message: `只能上传${this.data.maximum}个文件`,
          type: "error",
        });
      } else {
        this.files.push(Array.from(this.$refs.fileUpload.files));
      }
    },
    deleteFile(index) {
      this.files.splice(index, 1);
    },
  },
};
</script>

<style scope lang="less">
.input-upload {
  width: 360px;
  text-align: left;
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
    img {
      width: 14px;
      height: 14px;
    }
    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
}
</style>