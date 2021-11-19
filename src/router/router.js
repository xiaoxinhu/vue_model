import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Users from '../views/user/Users.vue'
import Rights from '../views/power/Rights.vue'
import Roles from '../views/power/Roles.vue'
import Cate from '../views/goods/Cate.vue'
import Params from '../views/goods/Params.vue'
import List from '../views/goods/List.vue'
import Add from '../views/goods/Add.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/home', 
      component: Home, 
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome},
        { path: '/users', component: Users},
        { path: '/rights', component: Rights},
        { path: '/roles', component: Roles},
        { path: '/categories', component: Cate},
        { path: '/params', component: Params},
        { path: '/goods', component: List},
        { path: '/goods/add', component: Add}
      ]
  
    }
  ]
})

router.beforeEach((to,from,next)=>{ 
  if(to.path === '/login')
    return next();
  
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');

  if(!tokenStr)
    return next('/login');

  next();

})


export default router
