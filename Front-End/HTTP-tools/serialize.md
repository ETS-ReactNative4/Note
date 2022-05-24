> By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use one of the following options.

> 默认，axios 会把JavaScript对象序列化为JSON。如果要使用 application/x-www-form-urlencoded 格式传输数据，可以按下面的方式处理。

## qs.stringify
```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

## serializes
[JavaScript Serializing JSON](https://techtutorialsx.com/2020/09/06/javascript-serializing-json/)

```js
const jsObject = {
  name: "Todd",
  age: 20,
  birthDate: new Date(),
  languages: ["Chinese", "English"]
}
console.log(JSON.stringify(jsObject));
{"name":"Todd","age":20,"birthDate":"2022-05-21T07:53:15.186Z","languages":["Chinese","English"]}
```
Note that the previous JSON string is obtained in a compacted format, ideal to be used for communication (it has less overhead with unnecessary characters).
序列化的JSON字符串是一种压实的格式，在传输的过程中开销更小。

## 总结
可以看出无论是JSON.stringify还是qs.stringify都是为了获得一种压缩的数据格式，方便网络传输。只是他们产生的结果形式不同。