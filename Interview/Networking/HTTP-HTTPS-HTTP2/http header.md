> HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

## Preflight request
A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.

It is an OPTIONS request, using three HTTP request headers: Access-Control-Request-Method, Access-Control-Request-Headers, and the Origin header.

## Access-Control-Allow-Headers
The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.

This header is required if the request has an Access-Control-Request-Headers header.

## [Referer](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer)
The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.

The HTTP referer (a misspelling of referrer[1]) is an optional HTTP header field that identifies the address of the webpage (i.e. the URI or IRI) which is linked to the resource being requested. By checking the referrer, the new webpage can see where the request originated.

Referer 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。

Referer 请求头可能暴露用户的浏览历史，涉及到用户的隐私问题。

### 在以下两种情况下，Referer 不会被发送：
- 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
- 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。

### [什么事防盗链](https://www.jianshu.com/p/0a1338db6cab)

### 如何防盗链
HTTP协议和标准的浏览器对于解决这个问题提供便利，浏览器在加载非本站的资源时，会增加一个头域，头域名字固定为：

这个referer标签正是为了告诉请求响应者（被拉取资源的服务端），本次请求的引用页是谁，资源提供端可以分析这个引用者是否“友好”，是否允许其“引用”，对于不允许访问的引用者，可以不提供图片，这样访问者在页面上就只能看到一个图片无法加载的浏览器默认占位的警告图片，甚至服务端可以返回一个默认的提醒勿盗链的提示图片。

一般的站点或者静态资源托管站点都提供防盗链的设置，也就是让服务端识别指定的Referer，在服务端接收到请求时，通过匹配referer头域与配置，对于指定放行，对于其他referer视为盗链。

## Keep-Alive
The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.

## User-Agent
The User-Agent request header contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.

请求头：
Host :主机和端口号
Connection ：连接类型
Upgrade-lnsecure-Requests：升级为https请求
User-Agent:浏览器名称
Accept：传输文件类型
Referer：页面跳转处
Accept-Encoding：文件编解码格式
Cookie：Cookie
x-requested-with :XMLHttpRequest(是Ajax异步请求)
If-Modified-Since: Tue, 11 Jul 2017 18:23:51 GMT(缓存时间)


响应头：
Location: http://www.baidu.com(服务端需要客户端访问的页面路径)
Server:apache tomcat(服务端的Web服务端名)
Content-Encoding: gzip(服务端能够发送压缩编码类型)
Content-Length: 80(服务端发送的压缩数据的长度)
Content-Language: zh-cn(服务端发送的语言类型)
Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)
Last-Modified: Tue, 18 Jul 2017 12:15:02 GMT(服务端对该资源最后修改的时间)
Refresh: 1;url=http://www.helloyoucan.com.(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)
Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)
Transfer-Encoding: chunked(分块传递数据到客户端）
Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)
Expires: -1//3种(服务端禁止客户端缓存页面数据)
Cache-Control: no-cache(服务端禁止客户端缓存页面数据)
Pragma: no-cache(服务端禁止客户端缓存页面数据)
Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)
Date: Tue, 18 Jul 2017 12:18:03 GMT(服务端响应客户端的时间)
