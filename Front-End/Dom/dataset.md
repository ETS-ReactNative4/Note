> 有时，需要在HTML元素上附加数据，供JavaScript脚本使用。一种解决方法是自定义属性。

```html
<div id="mydiv" foo="bar">
```
上面代码为div元素自定义了foo属性，然后可以用getAttribute()和setAttribute()读写这个属性。
```js

var n = document.getElementById('mydiv');
n.getAttribute('foo') // bar
n.setAttribute('foo', 'baz')
```
这种方法虽然可以达到目的，但是会使得HTML元素的属性不符合标准，导致网页的HTML代码通不过校验。

更好的解决方法是，使用标准提供的data-*属性。

```html
<div id="mydiv" data-foo="bar">
```
然后，使用元素节点对象的dataset属性，它指向一个对象，可以用来操作HTML元素标签的data-*属性。
```js
var n = document.getElementById('mydiv');
n.dataset.foo // bar
n.dataset.foo = 'baz'
```
上面代码中，通过dataset.foo读写data-foo属性。

删除一个data-*属性，可以直接使用delete命令。
delete document.getElementById('myDiv').dataset.foo;

[原文](https://blog.csdn.net/wsxujiacheng/article/details/75382075)