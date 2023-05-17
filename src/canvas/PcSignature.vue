<template>
  <!--vue-esign 电子签名 -->
  <el-dialog
    title="电子签名"
    :visible="visible"
    width="30%"
    @close="closeDialog"
    @open="openDialog"
  >
    <vue-esign
      ref="esign"
      :isCrop="false"
      :width="600"
      :height="300"
      :lineWidth="5"
      lineColor="#000000"
      bgColor=""
    ></vue-esign>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="danger" @click="handleReset">清空</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      config: {
        width: 400, // 宽度
        height: 200, // 高度
        lineWidth: 5, // 线宽
        strokeStyle: "red", // 线条颜色
        lineCap: "round", // 设置线条两端圆角
        lineJoin: "round", // 线条交汇处圆角
      },
      canvas: null,
      ctx: null,
      flag: false,
      client: null,
      resultImg: "",
    };
  },
  mounted() {},
  methods: {
    openDialog() {
      this.$nextTick(() => {});
    },
    handleReset() {
      this.$refs.esign.reset();
      this.resultImg = "";
    },

    onSubmit() {
      this.$refs.esign
        .generate()
        .then((res) => {
          this.resultImg = res;
          this.downloadImg();
        })
        .catch((err) => {
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    downloadImg() {
      var base64 = this.resultImg.toString(); // imgSrc 就是base64哈
      var byteCharacters = window.atob(
        base64.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
      );
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      var blob = new Blob([byteArray], {
        type: undefined,
      });
      var aLink = document.createElement("a");
      aLink.download = "签名.jpg"; //这里写保存时的图片名称
      aLink.href = URL.createObjectURL(blob);
      aLink.click();
    },
    closeDialog() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
