## params & query
```js
this.$router.push({name: 'AnswerDetail', params: {id: row.id, row}, query: {question_id: this.info.id}})

// console.log(this.$route.params)
{id: 3, row: {…}}
```
第一次进入 AnswerDetail 是可以获取到 params 的 row 对象，但是刷新页面就没有了，而且只剩下
```js
{id: '3'}
```
变成了字符串类型。