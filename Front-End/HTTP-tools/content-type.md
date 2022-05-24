> [Introduction to MIME types](https://webplatform.github.io/docs/concepts/Internet_and_Web/mime_types/)

MIME types enable browsers to recognize the filetype of a file which has been sent via HTTP by the webserver. 
MIME types 使得浏览器可以识别出服务器通过HTTP协议发送的文件类型。

## What are MIME types?
MIME (Multi-purpose Internet Mail Extensions) is an expansion of the original Internet e-mail protocol that exchanges different kinds of data files on the Internet: text, audio, video, images, application programs, and others. 

> [Content-Type](https://www.geeksforgeeks.org/http-headers-content-type/)

```
Type	        Values
Application 	application/EDI-X12
                application/EDIFACT
                application/octet-stream
                application/ogg
                application/pdf
                application/json
                application/zip
                application/x-www-form-urlencoded

Multipart	    multipart/mixed
                multipart/alternative
                multipart/form-data

Text	        text/css
                text/csv
                text/html
                text/javascript (obsolete)
                text/plain
                text/xml
```

## 第一种 application/json
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

> In HTTP there are two ways to POST data: application/x-www-form-urlencoded and multipart/form-data
> HTTP POST请求一般有2种方式传输数据： application/x-www-form-urlencoded 和 multipart/form-data。如何选择？基于哪些条件？

Summary; if you have binary (non-alphanumeric) data (or a significantly sized payload) to transmit, use multipart/form-data. Otherwise, use application/x-www-form-urlencoded.
如果传输的是比较大的二进制文件数据使用multipart/form-data，否则使用 application/x-www-form-urlencoded。

- application/x-www-form-urlencoded：传输给服务器的是字符串，由&分隔的键值对，如：MyVariableOne=ValueOne&MyVariableTwo=ValueTwo
- 为什么不一直使用multipart/form-data呢?对于简短的字母数字值(像大多数web表单一样)，添加所有MIME头的开销将大大超过更高效的二进制编码所节省的开销。

## 第二种 application/x-www-form-urlencoded
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

## 第三种 multipart/form-data
```js
import axios from 'axios'

let data = new FormData();
data.append('code','1234');
data.append('name','yyyy');

axios.post(`${this.$url}/test/testRequest`,data)
.then(res=>{
    console.log('res=>',res);            
})
```
