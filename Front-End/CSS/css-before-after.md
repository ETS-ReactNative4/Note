https://www.cnblogs.com/wonyun/p/5807191.html

## CSS3 :nth-child() 选择器
https://www.runoob.com/cssref/sel-nth-child.html
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style> 
p:nth-child(2)
{
	background:#ff0000;
}
</style>
</head>
<body>

<h1>这是一个标题</h1>
<p>这是第一个段落。</p>
<p>这是第二个段落。</p>
<p>这是第三个段落。</p>
<p>这是第四个段落。</p>

<p><b>注意:</b> Internet Explorer 8 以及更早版本的浏览器不支持 :nth-child()选择器.</p>

</body>
</html>
```

## css伪元素before/after和画三角形的搭配应用
https://www.cnblogs.com/lhat/p/4800328.html

第一步：如何用css画出三角形？
```css
/* css画三角形 */
.sanjiao{
    width:0;
    border-top:40px solid red;
    border-bottom:40px solid green;
    border-left:40px solid blue;
    border-right:40px solid yellow;
}

<div class="sanjiao">
</div>
```
![o](https://images2015.cnblogs.com/blog/753478/201707/753478-20170714102145228-525042899.png)

### 只留一条边
```css
/* css画三角形 */
.sanjiao{
    width:0;
    border-width:40px;
    border-style:solid;
    border-color:red transparent transparent transparent; /* transparent 设置边框颜色透明 */
}

<div class="sanjiao">
</div>
```
![0](https://images2015.cnblogs.com/blog/753478/201509/753478-20150911104121325-752381876.jpg)

### 给某个元素的伪类设置三角
```css
/* 上箭头 */
.jiantou:before{
    display:block;
    content:'';
    border-width:8px 8px 8px 8px;
    border-style:solid;
    border-color:transparent transparent #ff4d4d transparent;
    
    /* 定位 */
    position:absolute;
    left:40%;
    top:-16px;
}
```