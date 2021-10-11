<template>
  <div class="inputNumber">
    <span class="sub" @click="subNumber" ref="sub"> - </span>
    <div class="input-number">
      <input type="text" v-model="number" @change="inputNumberChange" />
    </div>
    <span class="add" @click="addNumber" ref="add">+</span>
  </div>
</template>

<script>
export default {
  name:'input-number',
  props: {
    data: {
      type: Object,
      default() {
        return {
            max:10,
            min:1
        }
      },
    },
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    inputNumberChange() {
      if (this.number > this.data.max) {
        this.number = this.data.max;
      } else if (this.number < this.data.min) {
        this.number = this.data.min;
      }
    },
    subNumber() {
      if (this.number > this.data.min) {
        this.number--;
      } 
    },
    addNumber() {
      if (this.number < this.data.max) {
        this.number++;
      }
    },
  },
  watch: {},
};
</script>

<style lang="less" scoped>
.inputNumber {
  display: flex;
  .sub {
    display: inline-block;
    background: #f5f7fa;
    width: 40px;
    height: 38px;
    border: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    font-size: 30px;
    color: #c0c4cc;
    img {
      width: 20px;
      height: 38px;
    }
  }
  .input-number {
    height: 38px;
    border-top: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
    display: inline-block;
    input {
      border: none;
      outline: none;
      height: 36px;
      font-size: 16px;
    }
  }
  .add {
    display: inline-block;
    background: #f5f7fa;
    width: 40px;
    height: 38px;
    border: 1px solid #dcdfe6;
    border-radius: 0 4px 4px 0;
    font-size: 30px;
    color: #c0c4cc;
  }
}
</style>