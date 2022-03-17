/*
 * @Author: your name
 * @Date: 2022-03-17 16:51:17
 * @LastEditTime: 2022-03-17 17:04:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD
 * @FilePath: \shopcar\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// 导入axios
import axios from 'axios'
// 配置axios全局有效
Vue.prototype.$axios = axios
// 配置axios请求根路径
axios.defaults.baseURL = "https://www.escook.cn"
// 导入bootstrap样式库
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')