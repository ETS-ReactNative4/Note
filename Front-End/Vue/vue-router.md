## https://router.vuejs.org/zh/guide/#html
```
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

### push
```
this.$router.push({ name: 'Index' })
```

### replace
```
if (this.$route.query.status === 'notfound') {
    this.$message({
    type: 'error',
    message: '未绑定，请绑定后再试'
    })
    return this.$router.replace({ name: 'login' })
}
```

### [params](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1)
```
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```

## 页面间传递参数
vue-router query和params传参(接收参数)，$router、$route的区别

### query方式传参和接收参数
```
传参: 
this.$router.push({
        path:'/xxx'
        query:{
          id:id
        }
      })
  
接收参数:
this.$route.query.id
```

### params方式传参和接收参数
```
this.$router.push({
        name:'xxx'
        params:{
          id:id
        }
      })
  
接收参数:
this.$route.params.id

// params 和 query 同时传
this.$router.push({name: 'GoodsInfo', params:{id: row.id}, query: row})
```
注意:params传参，push里面只能是 name:'xxxx',不能是path:'/xxx',因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！

注意:传参是this.$router,接收参数是this.$route,这里千万要看清了！！！

### this.$router 和this.$route有何区别？
![oo](https://images2018.cnblogs.com/blog/1201856/201808/1201856-20180803103148098-1855335209.png)

