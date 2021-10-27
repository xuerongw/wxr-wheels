<template>
  <div class="html-to-pdf">
    <div class="content" id="pdfDom">
      <span
        v-for="(item, index) in mockData"
        :key="index"
        :style="{
          width: item.width + 'px',
          height: item.h + 'px',
          left: item.x + 'px',
          top: item.y + 'px',
        }"
        style="position: absolute"
      >
        {{ item.value }}
      </span>
    </div>
    <button @click="getPdf('#pdfDom')">点击下载</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlTitle: "页面导出PDF文件名",
      mockData: [
        {
          label: "相对方名称",
          value: "111",
          required: true,
          key: "name",
          _comp: "input-text",
          x: "87",
          y: "11",
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
          x: "888",
          y: "255",
          w: 150,
          h: 50,
        },
      ],
    };
  },
};
</script>

<style>
.html-to-pdf {
  width: 100%;
  height: 100%;
}
#pdfDom {
  width: 100%;
  height: 200%;
}
</style>