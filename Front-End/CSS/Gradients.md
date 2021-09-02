## https://www.runoob.com/cssref/func-linear-gradient.html

background: linear-gradient(angle, color-stop1, color-stop2);

background: linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5));

## 设置文字渐变色
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