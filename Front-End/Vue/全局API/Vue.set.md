> 全局API

## Vue的v-model数据不及时更新问题解决方案
https://www.jianshu.com/p/526ec178399a

如果是用this.paybackModel.amount = res.result.amount/100, 是不能立即更新视图的, 所以需要是用下面的方法。
```js
async submitRecognition() {
    const param = {text: this.paybackModel.text};
    const res = await this.$networkHandler.sendRequest(ApiEnums.ParsePaybackText, param, {}, 'submitLoading', this);
    if (res && res.result) {
    this.$set(this.paybackModel, 'amount', res.result.amount/100)
    this.$set(this.paybackModel, 'pay_time', res.result.paid_time*1000)
    this.$set(this.paybackModel, 'pay_account', res.result.pay_account)
    this.$set(this.paybackModel, 'pay_user_name', res.result.pay_user_name)
    this.$set(this.paybackModel, 'payer_name', res.result.payer_name)
    this.$set(this.paybackModel, 'receive_account', res.result.receive_account)
        if (/银行/.test(param.text)) {
            this.$set(this.paybackModel, 'pay_type', 3)
        }
    } else {
        this.$message.warning('识别失败，请确认粘贴内容是否完整')
    }
},
```