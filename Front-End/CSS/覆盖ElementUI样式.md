## 通用样式 - 覆盖
建立element.css文件，将element-ui中的通用样式写入此文件；将element.css引入main.js（即放vue实例的文件）

> 写非通用样式时，在浏览器中用审查元素的方式来找到对应的类名或者标签
> 可以使用深度作用选择器（样式中的选择器能够作用的“更深”，例如影响子组件），>>> 或者 /deep/ .a >>> .b     或者 .a /deep/ .b
## 非通用样式 - 覆盖
```html
<el-table
    v-loading="loading"
    :data="list"
    border
    width="100%"
    class="drawer_table"
>
    <el-table-column
        align="center"
        label="操作"
        width="100">
        <template slot-scope="scope">
        <el-button size="small" type="success" @click="onConfirm(scope.row)">确认添加<el-button>
        </template>
    </el-table-column>
    <el-table-column
        align="center"
        prop="name"
        label="客户名称">
    </el-table-column>
</el-table>

<style scoped>
.drawer_table >>> .cell {
  text-overflow: clip!important;
}
</style>
```