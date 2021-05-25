## vue 传递 $event
```vue
<template>
  <draggable class="dragArea" tag="ul" :list="cate_list" :group="{ name: 'g1', put: false }">
    <li v-for="(el, index) in cate_list" :key="el.name" class="dragItem fold" @click="handle">
      <div class="dragTitle">
        <div class="seq">{{index+1 +'.'}}</div>
        <p>{{ el.name }}</p>
        <div class="tool_btn" @click="(e)=>{e.stopPropagation()}">
          <span class="el-icon-rank"></span>
          <span class="el-icon-edit" @click="handleEdit(el, $event)"></span>
          <span class="el-icon-delete" @click="handleDelete(el, $event)" style="margin-right: 30px"></span>
          <el-button type="primary" size="mini" @click="addCate(el)">新增子目录</el-button>
          <el-button type="primary" size="mini" @click="addNew">新增课程</el-button>
        </div>
      </div>
      <nested-drag :cate_list="el.children" />
    </li>
  </draggable>
</template>

handleEdit(el, e) {
    // 阻止时间冒泡
    e.stopPropagation();
},
```
