## toggleClass
```js
 $(".slide_btn").click(function () {
    if ($(this).hasClass('left_arrow')) {
        $('.navBar').scrollLeft(0)
    } else {
        $('.navBar').scrollLeft(250)
    }
    $(this).toggleClass('left_arrow');
})
```

## hasClass
```js
$(this).hasClass('left_arrow')
```

## .css()
### 背景图片
```js
$(this).css("background-image","url(on.jpg)")
```

## 选择器
### siblings()

### jQuery :nth-child()
```js
$("p:nth-child(3)")
```

## 获取标签属性
```js
let id = $(this).attr('href')
```

## Category: Shorthand Methods
### .ready(handler)
Description: Specify a function to execute when the DOM is fully loaded.
```js
$(document).ready(handler)
```


https://api.jquery.com/category/ajax/shorthand-methods/

