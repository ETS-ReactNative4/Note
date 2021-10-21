## 表格字段编辑子组件
```
<el-table
    v-loading="loading"
    :data="list"
    border
    width="100%"
>
    <el-table-column
        align="center"
        prop="seq"
        label="排序"
    >
        <template slot-scope="scope">
        <QuickEdit
            :val="scope.row.seq"
            :row="scope.row"
            label="排序"
            :min="0"
            :max="999"
            tip="输入数字，数字越小越靠前"
            @result="handleSave"
        />
        </template>
    </el-table-column>
</el-table>

// 子组件
<div>
    <span>{{val}}<i class="iconfont icon" @click="show">&#xe63c;</i></span>

    <el-dialog
        width="400px"
        title="编辑"
        :visible.sync="dialogVisible"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        @close="closeDialog"
    >
      <div v-loading="submitLoading" element-loading-text="正在提交" style="text-align: left">
        <el-form :model="model" ref="model" :rules="formRule">
          <el-form-item :label="label" required prop="val" label-width="32%">

            <el-input-number v-model="model.val" size="small" controls-position="right" :min="min" :max="max"></el-input-number>

          </el-form-item>
          <p style="margin-left: 60px">{{tip}}</p>
        </el-form>
        <div slot="footer" style="text-align: center">
          <el-button size="small" @click="closeDialog">取消</el-button>
          <el-button size="small" type="primary" @click="save">确定</el-button>
        </div>
      </div>
    </el-dialog>
</div>

props: {
    val: {
      type: Number
    },
},
data() {
    return {
      model: {
        val: ''
      },
    }
},
methods: {
    show() {
      this.dialogVisible = true;
      this.model.val = this.val;
    },
    save() {
      this.$emit('result', this.model.val, this.row)
      this.closeDialog()
    }
}

// 这里子组件v-model不能直接绑定props的val,子组件不能改变父组件的值, 这样破坏了数据流动方向。而是应该在show方法中处理
```


## 表格行编辑
```
<el-table
    v-loading="loading"
    :data="AdviserGoodsList"
    border
    size="mini"
    max-height="500"
>
    <el-table-column
        align="center"
        prop="seq"
        label="排序"
        width="110"
    >
        <template slot-scope="scope">
            <el-input-number v-if="scope.row.editState" v-model="seq" size="mini" controls-position="right"
                            :min="1" :max="100" style="width: 90px"></el-input-number>
            <span v-else>{{scope.row.seq}}</span>
        </template>
    </el-table-column>
    <el-table-column
        align="center"
        label="操作"
        width="200"
    >
        <template slot-scope="scope">
            <el-link v-if="!scope.row.editState" @click="handleGoodsEdit(scope.row)" class="operator">排序</el-link>
            <el-link v-if="scope.row.editState" type="success" @click="handleConfirm(scope.row)" class="operator">确定</el-link>
            <el-link v-if="scope.row.editState" type="primary" @click="handleCancel(scope.row)" class="operator">取消</el-link>
        </template>
    </el-table-column>
</el-table>

handleGoodsEdit(row) {
    this.AdviserGoodsList = this.AdviserGoodsList.map(item => {
        if (item.id === row.id) {
            item.editState = true
        }
        return item
    })
},
```
这样操作才能使列表重新渲染，被编辑的行状态才会变化。