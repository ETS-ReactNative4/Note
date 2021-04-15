## [CSS3 @media 查询](https://www.runoob.com/cssref/css3-pr-mediaquery.html)
@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。

```css
body {
    background-color:lightgreen;
}

@media screen and (max-width: 300px) {
    body {
        background-color:lightblue;
    }
}
```
重置浏览器查看大小。当浏览器窗口的宽度小于 300 像素时，背景颜色会变成淡蓝，否则是淡绿色。