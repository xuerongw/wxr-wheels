<template>
  <div class="inputBox">
    <input
      :type="data.type"
      v-model="data.value"
      :placeholder="data.placeholder"
      class="input"
      :class="[data.readonly ? 'readonly' : '']"
      :readonly="data.readonly"
      @change="inputChange"
      :maxlength="data.maxlength"
    />
    <span class="subscript" v-if="data.showLimit && data.type == 'text'"
      >{{ currentLength }}/{{ data.maxlength }}</span
    >
    <img
      src="@/assets/eye.svg"
      alt=""
      v-if="data.showEye"
      class="eye"
      @click="changeEye"
    />
  </div>
</template>

<script>
export default {
  name:'my-input',
  props: {
    data: {
      type: Object,
      default() {
        return {
          type: "text",
          value: "",
          placeholder: "请输入",
          readonly: false,
          maxlength: "10",
          showLimit: false,
          showEye: false,
        };
      },
    },
  },
  data() {
    return {
      value: "",
      showPassword: false,
    };
  },
  methods: {
    inputChange() {
      // console.log(this.value)
    },
    changeEye() {
      if (this.showPassword) {
        this.data.type = "text";
      } else {
        this.data.type = "password";
      }
      this.showPassword = !this.showPassword;
    },
  },
  computed: {
    currentLength() {
      return this.data.value.length;
    },
  },
};
</script>

<style lang="less" scoped>
.inputBox {
  display: inline-block;
  position: relative;
}
.input {
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
}
.input:focus {
  border: 1px solid #409eff;
}
.readonly {
  cursor: not-allowed;
}
.subscript {
  color: #909399;
  font-size: 12px;
  position: absolute;
  /* display: inline-block; */
  right: 4px;
  bottom: 0;
  margin-bottom: 5px;
}
.eye {
  width: 18px;
  height: 16px;
  position: absolute;
  right: 3px;
  vertical-align: middle;
  bottom: 10px;
}
</style>
// ##只读属性
//    <my-input :data="inputData"></my-input>
// inputData: {
        type: "text",
        value: "",
        placeholder: "请输入",
        readonly: false,
        maxlength: "10",
        showLimit: false,
        showEye: true,
      },