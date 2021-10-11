import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { DatePicker,Button,Message } from 'element-ui'
Vue.use(DatePicker)
Vue.use(Button)
Vue.prototype.$message=Message