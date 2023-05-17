<template>
  <div class="table">
    <div class="table-box">
      <el-table
        :data="tableData"
        height="100%"
        :header-cell-style="{
          backgroundColor: '#F8F8F9',
          color: '#313131',
          textAlign: 'center',
        }"
        :cell-style="{ padding: '4px', textAlign: 'center' }"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="isCheck"
          type="selection"
          width="50"
          align="center"
        />
        <el-table-column v-if="isIndex" label="序号" type="index" width="50" />
        <el-table-column
          v-for="(item, index) in tableList"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :width="item.width"
        >
          <!-- 处理特殊列例如字典，链接,操作等 -->
          <template slot-scope="{ row }">
            <slot :name="item.prop" :row="row">
              {{ row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-if="isPage"
      :pager-count="5"
      :current-page="curPage.current"
      :page-sizes="pageSizes"
      :page-size="curPage.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { tableList, tableConfig } from "./tableList";
export default {
  name: "myTableV2",
  props: {
    // 序号
    isIndex: {
      type: Boolean,
      default: true,
    },
    // 复选框
    isCheck: {
      type: Boolean,
      default: false,
    },
    tableColumns: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: 0,
    },
    // 是否分页
    isPage: {
      type: Boolean,
      default: true,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
    pageData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      curPage: {
        current: 1,
        size: 10,
      },
      tableList: tableList,
      tableConfig: tableConfig,
    };
  },
  watch: {
    pageData: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) this.init(val);
      },
    },
  },
  methods: {
    init() {
      this.curPage.current = this.pageData.current || this.curPage.current;
      this.curPage.size = this.pageData.size || this.curPage.size;
    },
    handleCurrentChange(val) {
      this.curPage.current = val;
      this.$emit("pageChange", this.curPage);
    },
    handleSizeChange(val) {
      this.curPage.current = 1;
      this.curPage.size = val;
      this.$emit("pageChange", this.curPage);
    },
    handleSelectionChange(val) {
      this.$emit("tableCheck", val);
    },
  },
};
</script>

<style></style>
