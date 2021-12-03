## [基本的.vue组件结构](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-single-file-components?file=/Hello.vue)
```
<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

[来自](https://cn.vuejs.org/v2/guide/single-file-components.html)

## [组件作用域的CSS](https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html)

## 组件内引入bootstrap影响了Element样式
### 起因
vue-quill-editor 为行内样式，在其他端使用需要加载样式文件，不够友好。故使用summernote，但是依赖bootstrap

summernote 局部引入bootstrap.css不齐作用，需要在组件中import '../../assets/bootstrap.css' // 这里引入影响全局样式, 只能引用一个修改后的bootstrap.css,只保留summernote依赖的样式


## Element UI 组件样式的覆盖
### “scoped”在工程中是如何工作的？
我们可以用自己的工程运行起来看一下。看看生成的页面是什么样的。

![oo](https://img2020.cnblogs.com/blog/641243/202004/641243-20200406124242326-371017631.png)

可以看到，在vue中引入了scoped这个概念，scoped的设计思想就是让当前组件的样式不会修改到其它地方的样式，使用了data-v-hash的方式来使css有了它对应模块的标识，这样写css的时候不需要加太多额外的选择器，方便很多。

### 去掉scope
刚才提到css不能覆盖的原因是属性"[data-v-hash]"导致的，那么最简单的方法就是去掉“scoped”，但是一旦这样做，当前组件中的css就可能污染组件外的空间
```css
<style scoped>
.fix_page {
  position: fixed;
  display:block;
  background-color: #fff;
  z-index: 10;
  width: 74%;
  height: 50px;
  bottom: 24px;
  padding-left: 20%
}
</style>
```

### /deep/ 或者 >>> 深度作用选择器
![oo](https://img2020.cnblogs.com/blog/641243/202004/641243-20200406124544250-1584454186.png)
某些预处理器（如Sass）可能无法>>>正确解析。在这些情况下，您可以使用/deep/组合器 - 它是别名>>>并且工作完全相同。这种方法，我比较推荐，页很好用，但是并不是万能的。
```css
<style scoped>
>>>.el-tabs__header {
  margin-bottom: 0;
}
</style>
```