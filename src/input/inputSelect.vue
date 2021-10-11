<template>
  <div class="inputSelect">
    <!-- 第一种 -->
    <!-- <select name="" id="" v-model="data.value">
      <option
        :value="item.key"
        v-for="(item, index) in data.option"
        :key="index"
      >
        {{ item.label }}
      </option>
    </select> -->

    <!-- 第二种 -->
    <div class="input-select" @click="showoption" ref="inputSelect">
      <input type="text" v-model="data.value" class="input" readonly />
      <img
        src="@/assets/select.svg"
        alt=""
        class="select-icon"
        ref="selectIcon"
      />
    </div>
    <div class="optionList" v-show="showOption">
      <ul class="optionBox">
        <li
          v-for="(item, index) in data.option"
          :key="index"
          class="options"
          @click="chooseOPtion(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-select",
  props: {
    data: {
      type: Object,
      default() {
        return {
          value: "",
          option: [
            {
              key: "default",
              label: "暂无数据",
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      showOption: false,
    };
  },
  methods: {
    showoption() {
      this.showOption = !this.showOption;
      if (this.showOption) {
        this.$refs.selectIcon.className = "select-icon select-icon-up";
        this.$refs.inputSelect.style.border='1px solid #409eff'
      } else {
        this.$refs.selectIcon.className = "select-icon select-icon-down";
        this.$refs.inputSelect.style.border='1px solid #dcdfe6'
      }
    },
    chooseOPtion(item) {
      this.data.value = item.label;
      this.showoption();
    },
  },
};
</script>

<style  scoped>
/*第一种样式要用less*/
/* .inputSelect {
  select {
    width: 160px;
    height: 30px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid #409eff;
    }
  }
  .selectBox {
    display: inline-block;
    .inputBox {
      display: inline-block;
      position: relative;
      height: 30px;
      margin-bottom: 10px;
      input {
        height: 30px;
        cursor: default;
        outline: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        padding: 0;
      }
      img {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 5px;
        bottom: 25%;
        // .animation(animation1_1,2s,ease-in-out,0s,1,normal);
      }
    }
    .optionList {
      //   border: 1px solid #dcdfe6;
      border-radius: 4px;
      position: relative;
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px;
        border-color: transparent transparent white transparent;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
      }
      ul {
        list-style: none;
        padding: 0;
        li {
        }
      }
    }
  }
} */

.input-select {
  width: 240px;
  height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.input-select:active {

}
.input {
  border: none;
  float: left;
  height: 100%;
  width: 80%;
  padding: 0;
  outline: none;
  cursor: default;
  font-size: 16px;
  color: #606266;
  padding-left: 10px;
}

.select-icon {
  vertical-align: middle;
  width: 8%;
  height: 100%;
  display: inline-block;
}
.select-icon-up {
  animation: up 0.5s ease;
  animation-fill-mode: forwards;
  /* animation-fill-mode 这个属性必须写在animation之后才会生效 */
}
.select-icon-down {
  animation: down 0.5s ease;
  animation-fill-mode: forwards;
}
/* 动画这一块就不用less写法了 */
@keyframes up {
  100% {
    transform: rotate(180deg);
  }
}
@keyframes down {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.optionList {
  width: 242px;
  border: 1px solid #e4e7ed;
  margin-top: 10px;
  border-radius: 4px;
}
.optionBox {
  list-style: none;
  padding: 0;
  text-align: left;
}
.options {
  height: 34px;
  margin-bottom: 10px;
  line-height: 34px;
  padding-left: 10px;
}
.options:hover {
  background-color: #f5f7fa;
}
</style>