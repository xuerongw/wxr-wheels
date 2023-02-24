<template>
  <el-table
    :data="tableData"
    height="100%"
    :header-cell-style="{
      backgroundColor: '#F8F8F9',
      color: '#313131',
      textAlign: 'center',
    }"
    :cell-style="{ padding: '4px', textAlign: 'center' }"
  >
    <el-table-column
      type="selection"
      width="55"
      v-if="tableConfig.showSelect"
    />
    <el-table-column
      v-for="(item, index) in tableList"
      :key="index"
      :label="item.label"
      :prop="item.prop"
      :show-overflow-tooltip="item.showOverflowTooltip"
      :width="item.width"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template>
        <slot name="operate"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { tableList, tableConfig } from "./tableList";
export default {
  name: "myTable",
  data() {
    return {
      tableList: tableList,
      tableConfig: tableConfig,
      tableData: [{ key: 1234 }],
    };
  },
};
</script>
<style scoped></style>
