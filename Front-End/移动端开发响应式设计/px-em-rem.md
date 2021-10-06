## px
px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

Using PX can be problematic for responsive sites, but they are useful for maintaining consistent sizing for some elements. If you have elements that should not be resized, then using PX is a good choice.

## em
所有未经调整的浏览器都符合: 1em=16px。

## rem
rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。

这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。

px 与 rem 的选择？
对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可 。

对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。

https://chiamakaikeanyi.dev/sizing-in-css-px-vs-em-vs-rem/

## So what about %, VW, and VH? What are they all about?
While PX, EM, and REM are primarily used for font sizing, 
%, VW, and VH are mostly used for margins, padding, spacing, and widths/heights.

- VH stands for “viewport height”, which is the viewable screen’s height. 100VH would represent 100% of the viewport’s height, or the full height of the screen. 
- VW stands for “viewport width”, which is the viewable screen’s width. 100VW would represent 100% of the viewport’s width, or the full width of the screen. 
- % reflects a percentage of the parent element’s size, regardless of the viewport’s size.

https://elementor.com/help/whats-the-difference-between-px-em-rem-vw-and-vh/