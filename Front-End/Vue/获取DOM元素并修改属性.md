## Vue获取DOM元素有两种方法

1. 直接给相应的元素加id,然后再使用document.getElementById("id");获取
2. 使用ref,给相应的元素加ref=“name”然后再使用this.$refs.name获取到该元素  如果使用了第三方组件 渲染后可能不太容易中找到目标元素

## 修改获取到元素的属性
```js
method: {
    handleScroll (e) {
        // console.log(e)
        console.log(e.target.scrollTop)
        if (e.target.scrollTop > 200) {
          const tHeader = document.getElementsByClassName('el-table__header-wrapper')[0]
          tHeader.style.position = 'fixed'
          tHeader.style.top = '88px'
          tHeader.style.zIndex = 2
        } else {
          const tHeader = document.getElementsByClassName('el-table__header-wrapper')[0]
          tHeader.style.removeProperty('position')
        }
    }
},
destroyed () {
    window.removeEventListener('scroll', this.handleScroll, true)
},
mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
}
```

## 比起强制修改DOM属性更好的方式是修改属性对象
```js
<div class="left" :style="styleObj"></div>

onChange() {
  this.isCollapse = !this.isCollapse;
  const src = require('../assets/logo_mini.png');
  this.styleObj = this.isCollapse ? {width: '64px', backgroundImage: `url(${src})`}:{};
  this.styleObj1 = this.isCollapse ? {width: '64px', backgroundColor: '#393c4a'}:{width: '200px',backgroundColor: '#393c4a'};
},
```