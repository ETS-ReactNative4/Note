## 页面相关信息
```js
function getInfo() {
    var s = "";
    s += " 网页可见区域宽："+ document.body.clientWidth;
    s += " 网页可见区域高："+ document.body.clientHeight;
    s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)";
    s += " 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)";
    s += " 网页正文全文宽："+ document.body.scrollWidth;
    s += " 网页正文全文高："+ document.body.scrollHeight;
    s += " 网页被卷去的高(ff)："+ document.body.scrollTop;
    s += " 网页被卷去的高(ie)："+ document.documentElement.scrollTop;
    s += " 网页被卷去的左："+ document.body.scrollLeft;
    s += " 网页正文部分上："+ window.screenTop;
    s += " 网页正文部分左："+ window.screenLeft;
    s += " 屏幕分辨率的高："+ window.screen.height;
    s += " 屏幕分辨率的宽："+ window.screen.width;
    s += " 屏幕可用工作区高度："+ window.screen.availHeight;
    s += " 屏幕可用工作区宽度："+ window.screen.availWidth;
    s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色";
    s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸";
    console.log(s)
}
getInfo();
```

## event
```js
window.onresize = () => {
    this.styleObject.height = document.documentElement.clientHeight-20+'px'
    this.markDownHeight = document.documentElement.clientHeight-75
};
```

## window.location
> 在WEB开发中，时常会用到javascript来获取当前页面的url网址信息，在这里是我的一些获取url信息的小总结。

下面我们举例一个URL，然后获得它的各个组成部分：http://i.cnblogs.com/EditPosts.aspx?opt=1

1. window.location.href(设置或获取整个 URL 为字符串)
返回：http://i.cnblogs.com/EditPosts.aspx?opt=1

2. window.location.protocol(设置或获取 URL 的协议部分)
返回：http:

3. window.location.host(设置或获取 URL 的主机部分)
返回：i.cnblogs.com

4. window.location.port(设置或获取与 URL 关联的端口号码)
返回：空字符(如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符)

5. window.location.pathname(设置或获取与 URL 的路径部分（就是文件地址）)
返回：/EditPosts.aspx

6. window.location.search(设置或获取 href 属性中跟在问号后面的部分)
返回：?opt=1

7. window.location.hash(设置或获取 href 属性中在井号“#”后面的分段)
