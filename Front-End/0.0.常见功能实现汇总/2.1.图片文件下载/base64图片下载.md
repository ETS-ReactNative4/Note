[参考](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_a_download)

## 遇到的问题
```html
<a :href="receive_qr_url" download="专用二维码">
    <el-button type="primary" size="mini">下载</el-button>
</a>
```

如果没有download="专用二维码"
Not allowed to navigate top frame to data URL，前端页面打开新窗口预览base64数据遇到的问题解决

该属性也可以设置一个值来规定下载文件的名称。所允许的值没有限制，浏览器将自动检测正确的文件扩展名并添加到文件 (.img, .pdf, .txt, .html, 等等)。

