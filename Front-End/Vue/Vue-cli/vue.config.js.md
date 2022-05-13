https://cli.vuejs.org/zh/config/#publicpath

## cli
```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
```

## 模式和环境变量
https://cli.vuejs.org/zh/guide/mode-and-env.html


https://v3.cn.vuejs.org/api/application-config.html#errorhandler

## 全局配置
```vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

app.config.globalProperties.foo = 'bar'   // 只有Vue3中有 app.config.globalProperties

app.config.globalProperties.$http = () => {}

console.log('===========config====', Vue.config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## 子组件中使用
```
app.component('child-component', {
  mounted() {
    console.log(this.foo) // 'bar'
  }
})
```