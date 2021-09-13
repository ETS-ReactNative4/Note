## [font-face](https://www.runoob.com/cssref/css3-pr-font-face-rule.html)
```css
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

## [阿里巴巴iconfont怎么是正确的使用方式？](https://www.zhihu.com/question/25952487)
1. 首先在Iconfont-阿里巴巴矢量图标库上面将你需要的图标点击购物车
2. 选择完所有要用的图标后“存储为项目”，给它命名。然后在“图标管理”-“图标应用项目”中找到这个项目，获取在线链接，把里面的代码复制到CSS中。
3. 在HTML中需要使用到图标时，使用iconfont类名


> 使用 font-size 设置小于 12px 的字体时，发现并不生效（字体不会再缩小了）

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

/* 而且块级元素才能缩放 */
.section .banner p span {
    background-color: #FF6A00;
    color: #fff;
    border-radius: 2px;
    display: inline-block;
    transform: scale(0.9);
    padding: 0 3px;
}
```

## [font-weight](https://www.w3school.com.cn/cssref/pr_font-weight.asp)
normal	默认值。定义标准的字符。
bold	定义粗体字符。
bolder	定义更粗的字符。
lighter	定义更细的字符。
100
200
300
400
500
600
700
800
900
```css

```