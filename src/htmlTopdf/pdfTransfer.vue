<template>
  <div class="pdf">
    <button @click="getDocument">下载</button>
    <div class="content" ref="content" id="pdfDom">
      <iframe
        src="111.html"
        frameborder="0"
        class="dd"
        ref="iframeContent"
        id="iframe2"
        @load="getiframe"
      ></iframe>
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
        {
          label: "银行账号",
          value: "333",
          required: true,
          key: "bankNumber",
          _comp: "input-text",
          x: "555",
          y: "1450",
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
          ctx.font = "50px";
          ctx.fillStyle = "#ffffff Calibri";
          ctx.fillText(item.label, item.x, item.y,item.w);
        });
        document.write(
          `<img src="${this.canvaArr[0].toDataURL("image/png")}" alt="">`
        );
        canvasToPdf(this.canvaArr[0]);
      }, 100);
    },
    getiframe() {
      var iframeDom =
        this.$refs.iframeContent.contentWindow.document.getElementsByClassName(
          "font"
        );
      // aa= Array.from(aa)
      iframeDom = [...iframeDom];
      iframeDom.map((item) => {
        item.style.fontSize = "50px";
      });
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
  height: 200%;
  overflow: hidden;
}
.dd {
  width: 100%;
  height: 200%;
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