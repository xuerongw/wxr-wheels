import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  DatePicker,
  Button,
  Message,
  Tabs,
  TabPane,
  Checkbox,
  CheckboxGroup,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Input,
} from "element-ui";
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.prototype.$message = Message;
