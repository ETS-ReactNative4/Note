> CSS gradients 是使用的 CSS特性，可以用来实现有趣的UI效果。因为它并不需要要借助页面标签就可以画出一些效果。


## linear-gradient
### https://www.runoob.com/cssref/func-linear-gradient.html
语法：
```css
background: linear-gradient(angle, color-stop1, color-stop2);

background: linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5));
```

### 设置文字渐变色
```css
.banner .title h1 {
    font-size: 6rem;
    margin-top: 0;
    background-image: linear-gradient(to right, #FB9D36, #FF4E50);
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
}
```


## radial-gradient
https://www.smashingmagazine.com/2022/01/css-radial-conic-gradient/
```css
.element {
    background: radial-gradient(circle, #9c27b0, #ff9800);
}


.element {
    background: radial-gradient(circle at top left, #9c27b0, #ff9800);
}

.element {
    background: radial-gradient(circle at right, #9c27b0, #ff9800);
}

.element {
    background: repeating-conic-gradient(
    #9c27b0 0 15deg,
    #ff9800 15deg 30deg
    );
}
```
![22](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/359e5216-94e1-4c08-9ed3-298647be077d/5-deep-dive-into-css-radial-gradient-conic-gradient.jpeg)

![22](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a13d194d-d89b-4fc1-9549-100f2df1d704/6-deep-dive-into-css-radial-gradient-conic-gradient.jpeg)

## conic-gradient
