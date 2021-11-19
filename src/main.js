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

Vue.filter('dateFormat',function(origiVal){
  const dt = new Date(origiVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2,'0')
  const d = (dt.getDate() + '').padStart(2,'0')

  const hh = (dt.getHours() + '').padStart(2,'0')
  const mm = (dt.getMinutes() + '').padStart(2,'0')
  const ss = (dt.getSeconds() + '').padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
