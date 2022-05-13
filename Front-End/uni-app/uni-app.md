> uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)

[uni-app](https://uniapp.dcloud.io/)

## 基础组件
https://uniapp.dcloud.net.cn/component/

uni-app的组件，分为基础组件和扩展组件。

基础组件在uni-app框架中已经内置，无需将内置组件的文件导入项目，也无需注册内置组件，随时可以直接使用，比如<view>组件。

uni-app为开发者提供了一系列基础组件，类似HTML里的基础标签元素。

虽然不推荐使用HTML标签，但实际上如果开发者写了div等标签，在编译到非H5平台时也会被编译器转换为view标签，类似的还有span转text、a转navigator等，包括css里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用view等组件。

## 路由
[uni-simple-router](https://hhyang.cn/v2/start/cross/codeRoute.html)


> uView是uni-app生态专用的UI框架

[u-view](https://www.uviewui.com/components/install.html)

## u-view 
### 单位
建议：开发中，只需谨记两个单位，px和rpx，一般情况下，我们推荐字体和宽高等，都使用rpx单位，如果真的需要固定尺寸，就是用px。

## uni-app
### tabBar
[tabBar](https://uniapp.dcloud.io/collocation/pages?id=tabbar)
在 pages.json 中提供 tabBar 配置，不仅仅是为了方便快速开发导航，更重要的是在App和小程序端提升性能。

[绚丽效果](https://www.zcool.com.cn/work/ZNTA1MjgyMTY=.html)

https://www.zcool.com.cn/

https://gif-tool.whatthehell.cn/tool/features


### navigator


## 常见问题积累
### 标签被修改
插入的video会变成uni-video，如果实在需要video标签，可以动态插入：
```js
const video = document.createElement("video");
        video.setAttribute('id', 'tcPlayerScriptId');
        video.setAttribute('preload', 'auto');
        video.setAttribute('playsinline','true');
        video.setAttribute('webkit-playsinline','true');
        document.getElementById('player').appendChild(video);
```

### 遇到的问题
uni-app在小程序中无法发起网络请求, 是因为没有添加header。
```js
export const getArticleList = (data) => {
    return http.request({
        url: `blog/list`,
        method: 'GET',
        header: {
            'content-type': 'application/json'
        },
        data,
    })
}
```

## [发布为小程序](https://uniapp.dcloud.io/quickstart?id=%e8%bf%90%e8%a1%8c%e3%80%81%e5%8f%91%e5%b8%83uni-app)
https://uniapp.dcloud.io/quickstart?id=%e5%8f%91%e5%b8%83%e4%b8%ba%e5%b0%8f%e7%a8%8b%e5%ba%8f