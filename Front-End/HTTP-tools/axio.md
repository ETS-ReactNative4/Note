## https://axios-http.com/docs/intro
axios 用的是 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

You can retrieve data from a URL without having to do a full page refresh. 
你可以从一个URL获取数据，而不用使得整个页面因此刷新。

### web 开发常用获取数据的方式
- [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## POST 请求
> 第一种 application/json
### Reauest Header
```
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Connection: keep-alive
Content-Length: 124
Content-Type: application/json
```

### Payload
Request Payload
```
{"id":"","name":"1234","status":1,"web_thumb_url":"","mobile_thumb_url":"","note":"","keywords":"","content":"","from":"PC"}
```

> 第二种 application/x-www-form-urlencoded
### Reauest Header
```
Accept: application/json, text/javascript, */*; q=0.01
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Connection: keep-alive
Content-Length: 51
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Cookie: PHPSESSID=bnjdr6oasnmtd2qojm04dac2nvbqi3nt
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36
X-Requested-With: XMLHttpRequest
```

### Payload
Form Data
```
cmd: open
target: l2_Q0stRmlsZXM
reqid: 180c560234e33b
```

> 第三种 multipart/form-data
```
import axios from 'axios'
let data = new FormData();
data.append('code','1234');
data.append('name','yyyy');
axios.post(`${this.$url}/test/testRequest`,data)
.then(res=>{
    console.log('res=>',res);            
})
```


