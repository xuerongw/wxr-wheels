 <template>
  <div class="inputRadio">
    <input
      type="radio"
      :value="data.label"
      v-model="data.value"
      name="radio"
    />
    <span >
      {{data.label}}
    </span>
  </div>
</template>

<script>
export default {
  name:'input-radio',
  props: {
    data:{
      type:Object,
      default(){
        return {
          value:'',
          label:'备选项'
        }
      }
    },
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style lang="less">
.checked {
  color: #409eff;
}
</style>
// <input-radio :data="radioData"></input-radio>
//  radioData: {
        value: "",
        label: "测试",
      },