> 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute

> Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案

## 插槽占位 slot
想要给自己封装的组件中放入文字或者标签 - 参考../0.2.vue-demo.html

## 组件中存在多个插槽 v-slot
```js
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

## 作用域插槽 slot-scope
[有时让插槽内容能够访问子组件中才有的数据是很有用的](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)

自 2.6.0 起有所更新。已废弃的使用 slot-scope attribute 的语法在这里。

```js
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```
在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 slotProps，但你也可以使用任意你喜欢的名字。

独占默认插槽的缩写语法 - 只有一个插槽语法可以更简洁：
```js
<alert>
    <template v-slot="{ no_user = { sing: 'shalalala'}}">
        {{ no_user.sing }}
    </template>
</alert>
```

在接下来所有的 2.x 版本中 slot 和 slot-scope attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。

```js
<el-table-column
    align="center"
    label="链接">
  <template v-slot="scope">
    <el-link type="primary" slot="reference">{{ scope.row.url }}</el-link>
  </template>
</el-table-column>
```