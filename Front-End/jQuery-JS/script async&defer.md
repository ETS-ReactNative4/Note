> Efficiently load JavaScript with defer and async

https://flaviocopes.com/javascript-async-defer/

When loading a script on an HTML page, you need to be careful not to harm the loading performance of the page. Depending on where and how you add your scripts to an HTML page will influence the loading time

## The position matters

```
<html>
  <head>
    <title>Title</title>
    <script src="script.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```
This is bad because there is a lot of delay introduced. A very common solution to this issue is to put the script tag to the bottom of the page, just before the closing </body> tag.


## Async and Defer (异步和延迟加载)
Both async and defer are boolean attributes. Their usage is similar:

```
<script async src="script.js"></script>

<script defer src="script.js"></script>
```

## 手动创建script并添加text
[HTML DOM Script 对象](https://www.w3school.com.cn/jsref/dom_obj_script.asps)
```js
(function() {
    // Google <!-- Global site tag (gtag.js) - Google Analytics -->
    var google = document.createElement("script");
    google.async = true;
    google.src = "https://www.googletagmanager.com/gtag/js?id=G-WNQL5F8";
    var g = document.getElementsByTagName("script")[0];
    g.parentNode.appendChild(google);
    
    google.text = 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'G-WNQL5F8\');'
})();
```