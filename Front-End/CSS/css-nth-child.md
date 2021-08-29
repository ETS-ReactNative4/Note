## nth:child(n)
```html
<div class="card card_active">
    <p class="theme_color">一亿管理者的必修课</p>
    <b><img src="./images/管理发酵卡.png" alt="管理发酵卡.png">管理发酵卡</b>
    <p class="list_item" style="margin-top: 10px"><img src="./images/正确.png" alt="">全年70课程 +8本管理著作精读</p>
    <p class="list_item"><img src="./images/正确.png" alt="">全方位提升管理者业务、管理、自我成长</p>
    <p class="list_item"><img src="./images/正确.png" alt="">张丽俊协同各领域大咖实战分享</p>
    <div class="theme_btn">立即报名</div>
</div>
```
card 下的p只能选择到第一个，后边的无法选择，被隔断了 !!!! 这种结论是错误的❌❌
> card 下的p不是因为被b隔断而无法选中，而是b也被算作子元素， 序号没有写对， 参考./1.0.background.html

## p:last-child  p:first-child
```html
<div class="wrapper">
    <h1>这是标题</h1> <!--如果没有h1那么p:first-child 是可以选中第一个p的 -->
    <p>第一个段落。</p>
    <p>第二个段落。</p>
    <p>第三个段落。</p>
    <a href="">中间加入a标签，测试是否可以选中p:last-child</a>
    <p>第四个段落。</p>
    <p>第五个段落。</p>
</div>
```
```css
.wrapper p:nth-child(2) {
    background-color: blue; /** 这样可以选中 第一个段落。 **/
}
```

:last-child表示其父元素的最后一个子元素，且这个元素是css 标签，才可以生效。

> 还有就是这种选择器好像只能选择原生的标签，不能选择class，使用下面的方式可以选择类
> 关于:last-of-type手册中是这么解释的：The :last-of-type CSS pseudo-class represents the last element of its type among a group of sibling elements.CSS伪类:last-of-type代表在一群兄弟元素中的最后一个指定类型的元素。

## last-of-type