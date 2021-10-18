import Vue from 'vue'
import App from './App'
import router from './router'
import '@/initWheel.js'
import '@/element.js'
// import  Sortable  from  'sortablejs' ;
Vue.config.productionTip = false
// Vue.prototype.$Sortable = Sortable
// Sortable.mount(new MultiDrag(), new Swap());
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
