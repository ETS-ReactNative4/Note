[box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

## CSS 中的 box-sizing 属性定义了 user agent 应该如何计算一个元素的总宽度和总高度。
在 CSS 盒子模型的默认定义里，你对一个元素所设置的 width 与 height 只会应用到这个元素的内容区。如果这个元素有任何的 border 或 padding ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

译者注: border-box不包含margin