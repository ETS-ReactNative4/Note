# 小程序开发

[官网文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1474632113_xQVCl)

## 小程序需要单独注册

## 安装开发者工具

[https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=19051520](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=19051520)

## 创建一个小程序项目到本地

## 框架

### Taro微信小程序

[https://nervjs.github.io/taro/docs/GETTING-STARTED.html](https://nervjs.github.io/taro/docs/GETTING-STARTED.html)

#### 编译后才能在微信开发者工具中预览

yarn dev:weapp

## 开发者工具快捷键

* Command + p 快速搜索文件
* Command + e 打开最近使用的文件

## 小程序配置

### 全局配置

[https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)

小程序根目录下的 app.json 文件用来对微信小程序进行全局配置。

window： navigationStyle 设置为 custom 可以去掉小程序自带的标题栏，这种效果更好。

### 小程序flex布局

### 小程序的生命周期函数

### 界面交互

```text
wx.showToast({
    title: '发生错误',
    icon: 'none',
    duration: 2000
  })

  wx.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })

  wx.showLoading({
    title: '加载中',
  })

  setTimeout(function () {
    wx.hideLoading()
  }, 2000)

  wx.showActionSheet({
    itemList: ['A', 'B', 'C'],
    success (res) {
      console.log(res.tapIndex)
    },
    fail (res) {
      console.log(res.errMsg)
    }
  })
```

#### http状态码与自定义错误码

## 上传体验版小程序

[https://jingyan.baidu.com/article/d8072ac4a389c6ec95cefd91.html](https://jingyan.baidu.com/article/d8072ac4a389c6ec95cefd91.html)

小程序在正式发布前，想让部分人进行体验

1. 微信开发者工具上传
2. 管理-版本管理-开发版本设置问体验版
3. 到小程序管理后台-管理-成员管理-输入微信号添加体验成员

## 提交审核版本

填入小程序相关信息，就可以提交审核啦

