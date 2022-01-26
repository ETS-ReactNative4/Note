## 2.x 
目前 2.x 跟 TS 的整合，通常需要基于 vue-class-component 来用基于 class 的组件书写方式

https://class-component.vuejs.org/

## 3.x 版本
```js
export default defineComponent({
  name: 'MyTSC',
  props: {
    bookA: {
      type: Object as PropType<Book>,
      // 请务必使用箭头函数
      default: () => ({
        title: 'Arrow Function Expression',
      }),
      validator: (book: Book) => !!book.title,
    },
  }
}
```
总体感觉很鸡肋。