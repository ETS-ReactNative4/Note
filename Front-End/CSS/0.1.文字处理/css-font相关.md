## font-size
> 使用 font-size 设置小于 12px 的字体时，发现并不生效（字体不会再缩小了）

### CSS - font-size 设置小字体不生效解决方案（小于12px)
原因是 Chrome 以及 Chromium 内核的浏览器在中文语言下最小字体只能是 12px，大部分浏览器都是如此。

如果执意要设置小于 12px 的字体，那只能使用 transform: scale() 缩放属性来实现。
```css
.txt {
    -webkit-transform: scale(0.5)
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

### 常见单位(px,em,rem)
px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

所有未经调整的浏览器都符合: 1em=16px。
em是一个相对的单位，是当前元素相对于父元素字体的大小而言的；例如：父元素设置font-size: 32px ，子元素设置font-size: 1em ，那么子元素的字体大小也是32px。 如果父元素没有设置字体大小的话，就是想对于浏览器默认的字体大小而言的。

rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。


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

## [font-family](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)

## [text-align](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)
text-align: justify;
文字向两侧对齐，对最后一行无效。

## [text-decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)
text-decoration: green wavy underline; 

## [text-transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform)

## text-shadow


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

