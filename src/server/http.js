import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = ''

// 请求队列
let apiLock = {};

//添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 设置请求锁
  let apiLockIndex = config.url.replace(config.baseURL, '');
  if (apiLock[apiLockIndex] && apiLock[apiLockIndex] == true && config.canBatch !== true) return Promise.reject('end');
  apiLock[apiLockIndex] = true;
    //设置请求头
    config.headers = {
        'Authorization':'bearer 7789e961-df8f-42b9-b8e6-818245c51e3f',
        'Content-Type':'application/json;charset=UTF-8'
    }

    return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


//添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 恢复请求锁
  let _config = response.config;
  let apiLockIndex = _config.url.replace(_config.baseURL, '');
  apiLock[apiLockIndex] = false;
  return response;
}, function (error) {
  // 恢复请求锁
  if (error === 'end') return;
  let config = error.config || error;
  let apiLockIndex = config.url.replace(config.baseURL, '');
  apiLock[apiLockIndex] = false;
  // 对响应错误做点什么
  if (error.response.status === 401) {  //token失效
    // sessionStorage.removeItem('Authorization');
    // Message({
    //   type: 'error',
    //   message: '登录超时,请重新登录'
    // });
    // if ('/login' !== location.pathname) {
    //   setTimeout(() => {
    //     location.replace('/login');
    //   }, 1000);
    // }
  }
  return Promise.reject(error);
});

export default axios
