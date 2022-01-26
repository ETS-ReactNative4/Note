## el-input 相关
### 只能输入数字
```
<el-input oninput="value=value.replace(/\s/g,'')" v-model="studentModel.name" size="small" clearable style="width: 200px;"/>
```

### 无法输入空格
```
<el-input oninput="value=value.replace(/\D/g,'')" v-model="studentModel.name" size="small" clearable style="width: 200px;"/>
```

### 更复杂的校验放到validator中处理
```
formRules: {
    name: [
        {required: true, message: '请输入学员姓名'},
        { validator:(rule,val,cb) => {
            val = val.replace(new RegExp(EmojiRanges.join('|'), 'g'), '');
            val = val.trim();
            if (val.includes('+') || val.includes('/') || val.includes('\\')) {
                return cb(new Error('名称中不可包含+/\\特殊字符'))
            }
            this.studentModel.name = val;
            return cb();
            }, trigger: 'change' }
    ]
}
```