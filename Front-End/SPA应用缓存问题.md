## 浏览器缓存原理
1. 刷新浏览器时js、css等静态文件会被浏览器缓存到本地，再次请求服务器如果文件未发生改变，浏览器会使用本地缓存的文件
2. webpack打包时可以默认会给文件附带hash值，文件值发生变化会使浏览器从服务器下载新的文件

## 上面的问题需要验证


## [JS 刷新浏览器的方法](https://www.w3school.com.cn/jsref/met_loc_reload.asp)
```js
function reloadPage() {
  window.location.reload()
}
```
