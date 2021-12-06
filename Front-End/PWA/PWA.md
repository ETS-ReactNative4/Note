[PWA（Progressive Web Apps，渐进式 Web 应用）](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)

https://web.dev/progressive-web-apps/

[专业前端技术规范](https://web.dev/learn/)

## 创建一个PWA的步骤
### Make it installable

### Service workers
Service workers are a fundamental part of a PWA. They enable fast loading (regardless of the network), offline access, push notifications, and other capabilities.

## 参考博客
https://www.cnblogs.com/taylorshi/p/14922550.html

### 建立应用程序清单(Web App Manifest)

## [Vue 项目添加pwa](https://juejin.cn/post/6844904033522548743)
### 安装vue/pwa
```
vue add @vue/pwa
```

### vue.config.js 文件中配置pwa


> 有一个困扰 web 用户多年的难题——丢失网络连接。虽然 Service Worker 的语法比 AppCache 更加复杂，但是你可以使用 JavaScript 更加精细地控制 AppCache 的静默行为。

## Service workers
- service worker 的基本架构
- 注册一个 service worker
- service worker 的 install 及 activation 过程
- 更新 service worker 还有它的缓存控制和自定义响应，这一切都在一个简单的离线的应用程序中

> 推送消息在 Android & iOS平台很常见，这是让用户重新参与到你的app中最有效的方式。那个在Web app中的消息推送怎么做呢?

## [通知和推送服务](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)
推送 API和通知 API是两个相互独立的 API，但在提高用户参与度这件事上，它们可以配合得很好。

推送 API 可以用来从服务端推送新的内容而无需客户端介入，它是由应用的 Service Worker 来实现的；通知功能则可以通过 Service Worker 来向用户展示一些新信息，或者至少提醒用户应用已经更新了某些功能。

跟 Service Worker 一样，这些工作是在浏览器外部实现的，所以即使应用被隐藏到后台甚至被关闭了，我们仍然能够推送更新或者通知给用户。

### 通知 API(Notification API)
为了能够显示通知，我们需要先请求用户的授权。最佳的实践经验告诉我们，不应该直接请求授权，而应该引导用户点击一个按钮，然后才弹出授权窗口：
这里就涉及到请求用户授权时的用户体验[UX](https://developers.google.com/web/fundamentals/push-notifications/permission-ux#value_proposition)

当用户确定接收通知，应用就可以获得推送通知的功能。一旦用户选择授权，这个授权结果对通知 API 和推送 API 两者都有效。

[用户可以在网址前边的图标更改授权状态](https://stackoverflow.com/questions/47447637/notification-permission-gives-denied-always)

### 推送 API(Push API)
推送比通知要复杂一些，我们需要从服务端订阅一个服务，之后服务端会推送数据到客户端应用。