<template>
  <div class="input-date-range">
    <div v-if="data.required" style="color: red">*</div>
    <div class="startTime">
      {{ data.labelOne }}
      <span>：</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="endTime"
      >
      </el-date-picker>
    </div>
    <div>
      {{ data.labelTow }}
      <span>：</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        :picker-options="startTime"
      >
      </el-date-picker>
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
          required: false,
          labelOne: "开始日期",
          labelTow: "结束日期",
          value1: "",
          value2: "",
        };
      },
    },
  },
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  computed: {
    endTime() {
      let _this=this
      return {
        disabledDate(time) {
          // if (this.value2 != "") {
          return (
            time.getTime() > new Date(_this.value2).getTime()
          );
          // }
          //大于结束日期禁止
        },
      };
    },
    startTime() {
        let _this=this
      return {
        disabledDate(time) {
          // if (this.value1 != "") {
          return (
            time.getTime() < new Date(_this.value1).getTime()
          ); //大于当前的禁止，小于7天前的禁止
          // }
        },
      };
    },
  },
};
</script>

<style>
.startTime{
  margin-bottom: 30px;
}
</style>