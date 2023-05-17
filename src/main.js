import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/initWheel.js";
import "@/element.js";
import "@/dragFormFive/components/global.js";
import "@/assets/public.css";
import htmlToPdf from "./htmlTopdf/utils/htmlToPdf";
//main.js中引入：
import vueEsign from "vue-esign";
Vue.use(vueEsign);
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf);
// import  Sortable  from  'sortablejs' ;
Vue.config.productionTip = false;
// Vue.prototype.$Sortable = Sortable
// Sortable.mount(new MultiDrag(), new Swap());
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
