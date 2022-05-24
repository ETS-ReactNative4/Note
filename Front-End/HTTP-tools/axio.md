## https://axios-http.com/docs/intro
axios 用的是 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

You can retrieve data from a URL without having to do a full page refresh. 
你可以从一个URL获取数据，而不用使得整个页面因此刷新。


## Creating an instance
```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

## [config](https://axios-http.com/docs/req_config)
### withCredentials
[I set withCredentials is true, but cross-site requests failed. I can't find why... ](https://github.com/axios/axios/issues/587)

I'm having the same issue .. what I have found out is setting axios.defaults.withCredentials = true; and not using an instance at all solves the issue

```
axios.withCredentials = true
```

## [Interceptors](https://axios-http.com/docs/interceptors)
### // Add a request interceptor

### // Add a response interceptor

