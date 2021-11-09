import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { DatePicker,Button,Message,Tabs,TabPane,Checkbox} from 'element-ui'
Vue.use(DatePicker)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Checkbox)
Vue.prototype.$message=Message