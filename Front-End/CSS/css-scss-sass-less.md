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
