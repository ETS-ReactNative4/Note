## 小程序多端解决方案
- Taro 29.9k
- uni-app 34.2k

[uni-app](https://uniapp.dcloud.io/)

[u-view](https://www.uviewui.com/components/install.html)

## [发布为小程序](https://uniapp.dcloud.io/quickstart?id=%e8%bf%90%e8%a1%8c%e3%80%81%e5%8f%91%e5%b8%83uni-app)
https://uniapp.dcloud.io/quickstart?id=%e5%8f%91%e5%b8%83%e4%b8%ba%e5%b0%8f%e7%a8%8b%e5%ba%8f

## [微信小程序](https://developers.weixin.qq.com/doc/)
### [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
集成了公众号网页调试和小程序调试两种开发模式

在微信小程序开发者工具中，导入生成的微信小程序项目，测试项目代码运行正常后，点击“上传”按钮，之后按照 “提交审核” => “发布” 小程序标准流程，逐步操作即可

## 遇到的问题
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


## tabBar
[绚丽效果](https://www.zcool.com.cn/work/ZNTA1MjgyMTY=.html)

https://www.zcool.com.cn/

https://gif-tool.whatthehell.cn/tool/features

## uni-app
### navigator
