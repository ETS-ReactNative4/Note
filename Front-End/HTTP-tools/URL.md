> On the World Wide Web, a query string is the part of a uniform resource locator (URL) containing data that does not fit conveniently into a hierarchical path structure. The query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form.

https://en.wikipedia.org/wiki/Query_string
## URL - Query string
Typical URL containing a query string is as follows:
```
http://example.com/over/there?name=ferret
```

Web frameworks may provide methods for parsing multiple parameters in the query string, separated by some delimiter.[4] In the example URL below, multiple query parameters are separated by the ampersand, "&":
```
http://example.com/path/to/page?name=ferret&color=purple
```

## URL - Parameters
URL Parameters enable pages to capture and utilize parameters set dynamically in their URLs.

Parameter values are set dynamically when the page is called with additional values in its URL:

```
http://yoursite.com/yourpage/value1/value2/value3
```

## URL encoding
传递数组类型的params有时url会变成下面的样子：
```js
// https://www.baidu.com/api/mu_answer/list?start_time=&end_time=&nickname=&types[]=1&types[]=3
```
用到的是axios的param传递，使用了qs.stringify(params)
```js
'https://www.baidu.com/api/mu_answer/export?start_time=&end_time=&nickname=&types%5B0%5D=4'
```

## URL decoding
使用decodeURI 可以把上面的形式变成这样：
```js
const parsed = decodeURI(exportUrl)
// https://www.baidu.com/api/mu_answer/export?start_time=&end_time=&nickname=&types[0]=4&types[1]=3
```