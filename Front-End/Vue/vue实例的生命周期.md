[生命周期钩子](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
![oo](https://cn.vuejs.org/images/lifecycle.png)

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

## 刷新页面
依次执行当前页面vue组件的beforeCreate, created, beforeMount, mounted, beforUpdate, updated

所以不要指望在页面刷新前保存页面的data到localStorage

## 页面后退时, vue执行的生命周期钩子

点击浏览器返回按钮，会触发当前页面的 beforeDestroy

假设从b页面后退到a页面
依次执行a页面vue组件的beforeCreate, created, beforeMount, 然后是b页面组件的beforeDestroy, destroyed, 最后是执行a页面vue组件的mounted, beforUpdate, updated

## 页面前进时, vue执行的生命周期钩子
假设从a页面到b页面
依次执行b页面vue组件的beforeCreate, created, beforeMount, 然后是a页面组件的beforeDestroy, destroyed, 最后是执行b页面vue组件的mounted, beforUpdate, updated

## 页面关闭时, vue执行的生命周期钩子
直接点击浏览器标签关闭页面, 不执行任何生命周期钩子, 如果要在页面关闭前做点事情(例如保存数据),
可以给页面绑定beforeunload或unload事件, 在事件中编写逻辑

## beforeCreate
在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

## created
在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。
```
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```
不要在选项 property 或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())

因为箭头函数并没有 this

经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。

## beforeMount

## mounted
实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。

## updated
由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

## destroyed
实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

## $store 中的 值在哪个阶段可以拿到?
```
mounted () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        console.log('this.$store.adminHabits', this.$store.adminHabits)
      })
    }
```
这里都拿不到

## $nextTick
场景：父组件打开子组件的时候要将子组件的状态重置，父组件中直接调用子组件的方法 this.$refs.courseChoose.open(); 会报错
"TypeError: Cannot read property 'open' of undefined"

所以要放在 this.$nextTick 中调用
```vue
onOpenChoose() {
  this.chooseVisible = true;
  this.$nextTick(()=>{
    this.$refs.courseChoose.open();
  });
},
```