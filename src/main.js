import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/global.css'
import './plugins/element.js'
//导入全局样式表

//导入字体图表
import './assets/fonts/iconfont.css'
//导入axios库
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config  
})
Vue.prototype.$http=axios
Vue.component('tree-table',TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
