import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/index')
const List = () => import('@/pages/list')

Vue.use(Router)

/**
 * 路由配置
 */
const routers = [
  {
    path: '/index',
    // alias: '/index', //起的别名，当访问/index也能访问到
    name: Home,
    component: Home,
    meta: {title: '首页'},
  }, 
  {
    path: '/list',
    name: List,
    component: List,
    meta: {title: '列表页'},
  }, 
  {
    path: "/",
    redirect: "/index",  // 重定向
    meta: {title: '首页'} 
  }
]

/**
 * 路由实例
 */
const router = new Router({
  routes: routers
});

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    } else {
      document.title = '无限云溯'
    }
    next();//不能省略
})

export default router;
