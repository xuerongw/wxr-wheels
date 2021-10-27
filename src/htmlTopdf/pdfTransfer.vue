<template>
  <div class="pdf">
    <button @click="getDocument">下载</button>
    <div class="content" ref="content" id="pdfDom">
      <span>11111</span>
      <iframe
        src="111.html"
        frameborder="0"
        class="dd"
        ref="iframeContent"
      ></iframe>
      <div class="die" ref="test"><p class="text">叠加测试</p></div>
      
    </div>
  </div>
</template>

<script>
import { getPdfDouble } from "./utils/htmlToCanvas";
import { canvasToPdf } from "./utils/canvasToPdf";
export default {
  name: "pdf",
  data() {
    return {
      htmlTitle: "页面导出PDF文件名",
      canvaArr: [],
      mockData: [
        {
          label: "相对方名称",
          value: "111",
          required: true,
          key: "name",
          _comp: "input-text",
          x: "87",
          y: "15",
          w: 150,
          h: 50,
        },
        {
          label: "开户行",
          value: "222",
          required: true,
          key: "bankName",
          _comp: "input-text",
          x: "150",
          y: "777",
          w: 150,
          h: 50,
        },
      ],
    };
  },
  methods: {
    getDocument() {
      getPdfDouble(this.$refs.iframeContent.contentWindow.document.body).then(
        (res) => {
          this.canvaArr.push(res);
        }
      );
      setTimeout(() => {
        let ctx = this.canvaArr[0].getContext("2d");
        this.mockData.map((item) => {
          ctx.fillText(item.label, item.x, item.y);
        });
        canvasToPdf(this.canvaArr[0]);
      }, 100);
    },
  },
  mounted() {},
};
</script>

<style>
.pdf {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.dd {
  width: 100%;
  height: 100%;
  /* margin-top: -20px; */
}
.die {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 20px;
  left: 0;
}
.text {
  position: absolute;
  top: 0;
  right: 0;
}
</style>