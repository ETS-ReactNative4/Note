> 使用 font-size 设置小于 12px 的字体时，发现并不生效（字体不会再缩小了）。

## CSS - font-size 设置小字体不生效解决方案（小于12px)
原因是 Chrome 以及 Chromium 内核的浏览器在中文语言下最小字体只能是 12px，大部分浏览器都是如此。

如果执意要设置小于 12px 的字体，那只能使用 transform: scale() 缩放属性来实现。
```css
.txt {
    -webkit-transform: scale(0.5)
}

/* 有些浏览器允许设置小于 12px 的字体，那么你需要额外写一个类。 */
.fontSize {
    font-size: 8px;
}
```
