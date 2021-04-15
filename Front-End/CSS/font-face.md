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

