import Vue from 'vue'
import App from './App.vue'
import axios from './server/http'
import VueAxios from 'vue-axios'
import api from './server/api'
import router from './router'

// 页面多处使用的组件（按需加载）
import { Button,Field,PullRefresh } from 'vant'
Vue.use(Button).use(Field).use(PullRefresh)

// Vue.prototype.$axios = axios
Vue.use(VueAxios,axios)

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
