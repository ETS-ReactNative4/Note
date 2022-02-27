## sass
世界上最成熟、最稳定、最强大的专业级CSS扩展语言！
https://www.sass.hk/guide/

### 混合器
网站中有几处小小的样式类似，使用变量来统一处理这种情况是非常不错的选择
要大段大段的重用样式的代码，可以通过sass的混合器实现大段样式的重用

混合器使用@mixin标识符定义，下边的这段sass代码，定义了一个非常简单的混合器，目的是添加跨浏览器的圆角边框。
```
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```
然后就可以在你的样式表中通过@include来使用这个混合器，放在你希望的任何地方。@include调用会把混合器中的所有样式提取出来放在@include被调用的地方。如果像下边这样写：
```
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//sass最终生成：
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

#### 给混合器传参
混合器并不一定总得生成相同的样式。可以通过在@include混合器时给混合器传参，来定制混合器生成的精确样式。
```
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```
当混合器被@include时，你可以把它当作一个css函数来传参。如果你像下边这样写：
```
a {
  @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```


> [sass 官网提供了一个很好的对比](https://sass-lang.com/guide)
> but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass has features that don't exist in CSS yet like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS.

> css文件大了就会变得复杂难以维护，这是预处理器出现的原因。Sass有一些css不具备的特性：嵌套、混合、继承、其他的语法糖有助于写出健壮的维护性好的css。

## css
```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

## scss
```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## sass(语法与scss相同，只是进一步简化省略了{}和；)
```css
$font-stack:    Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

### 模块化文件module
使用@use在其他文件引入

### @mixin 相当于定义了函数 可以传入变量实现复用

## [less](https://less.bootcss.com/)



