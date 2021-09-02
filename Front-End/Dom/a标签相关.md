## a标签href不跳转 禁止跳转 void(0)

当页面中a标签不需要任何跳转时，从原理上来讲，可分如下两种方法：

1. 标签属性href，使其指向空或不返回任何内容。如：
<a href="javascript:void(0);" >点此无反应javascript:void(0)</a>

<a href="javascript:;" >点此无反应javascript:</a>

javascript:void(0) 仅仅表示一个死链接

2. 标签事件onclick，阻止其默认行为。如：
<a href="" onclick="return false;">return false;</a>

<a href="#" onclick="return false;">return false;</a>

注意：只有一个href="#"是不可以的，会默认定位到页面顶部。

1.javascript：void(0)这种伪协议，少写的好，如果你看过一些web标准的书就知道为什么了。（不懂，原话摘的，暂做记录） 
2.链接（href）直接使用javascript：void(0)在IE中可能会引起一些问题，比如：造成gif动画停止播放等，所以，最安全的办法还是使用“####”。为防止点击链接后跳转到页首，onclick事件return false即可。 

## Eslint Rule
'no-script-url': 0,

## rel="noopener noreferrer"
今天新学到一个安全知识，就是a标签target为_blank时，要加上rel="noopener noreferrer"。

为啥呢？我在网上搜索，http://www.cnblogs.com/ilinuxer/p/5245983.html

比如这一篇，发现window.open这个可以获得父窗口的很多参数，所以有获得原网站的部分权限的说法https://www.cnblogs.com/tangyuu/p/6912044.html

所以在a标签下添加rel="noopener noreferrer"来防止钓鱼网站，因为它获取的window.opener的值为null

## 锚点
