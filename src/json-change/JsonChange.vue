<template>
  <!-- json文件修改,下载 -->
  <div class="json-change">
    <div class="header-box">
      表名
      <el-input v-model="tableName" placeholder="请输入内容" class="input" />
      <el-button type="primary" @click="addData"> 添加行 </el-button>
      <el-button type="primary" @click="saveData"> 保存数据 </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :label="item"
      >
        <template slot-scope="{ row }">
          <el-input v-model="row[item]" placeholder="请输入内容" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ $index }">
          <el-button type="primary" @click="delData($index)">
            删除行
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import data from "./data.json";
export default {
  name: "JsonChange",
  data() {
    return {
      tableHeader: [],
      tableData: [],
      tableName: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.tableHeader = data.col_name;
      this.tableData = data.field_list;
      this.tableName = data.table_name;
    },
    addData() {
      this.tableData.push({
        name: "",
        type: "",
        is_primary_key: "",
        source_db: "",
        source_table: "",
        table_field_name: "",
      });
    },
    delData(index) {
      this.tableData.splice(index, 1);
      // console.log(index);
    },
    saveData() {
      let js = {
        index_name: this.tableName,
        table_name: this.tableHeader,
        field_list: this.tableData,
      };
      let data = JSON.stringify(js);
      var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
      const objectURL = URL.createObjectURL(blob);
      // 创建一个 a 标签Tag
      const aTag = document.createElement("a");
      // 设置文件的下载地址
      aTag.href = objectURL;
      // 设置保存后的文件名称
      aTag.download = "新数据.json";
      // 给 a 标签添加点击事件
      aTag.click();
      // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
      // 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。
      URL.revokeObjectURL(objectURL);
    },
  },
};
</script>

<style scoped>
.json-change {
  padding: 60px;
}
.header-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.input {
  width: 600px;
}
</style>
