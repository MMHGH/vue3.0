import Vue from 'vue'
import App from './App.vue'
import axios from './server/http'
import VueAxios from 'vue-axios'
import api from './server/api'

// Vue.prototype.$axios = axios
Vue.use(VueAxios,axios)

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  axios,
  render: h => h(App)
}).$mount('#app')
