## form 元素
### input
```html
<form>
  <input type="file" name="pic" id="pic" accept="image/gif, image/jpeg" />
</form>
```
如果不限制图像的格式，可以写为：accept="image/*"。

## input 禁止复制
```html
<!DOCTYPE html>
<html>
<head>
    <title>禁止粘贴</title>
</head>
<body>
    <input type="" name="nocopy" oncut="return false">
    <input type="" name="nocopy" onpaste="return false" autocomplete=”off”>
    <textarea onpaste="return false"></textarea>
</body>
</html>
```


## 阻止表单默认提交
input type="submit" 才可以利用HTML5的表单required 验证支持
```html
<form name="commentForm" onsubmit="return false;">
    <input type="text" placeholder="名字" required name="username">
    <input type="email" placeholder="邮箱" required name="email">
    <textarea name="" id="" cols="30" rows="10" required name="content"></textarea>
    <input type="submit" value="提交" onclick="leave_com()">
</form>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    function leave_com() {
        axios({
            method: 'post',
            url: 'http://localhost:3004/api/leave_comment',
                data: {
                    username: document.username.value,
                    email: document.email.value,
                    content: document.content.value
                }
            })
            .then(function(response) {
            $('#visit_number').html(1000+response.data.visit_num);
            $('#praise_number').html(20+response.data.praise_num)
            })
            .catch(function (error) {
            if (error.response) {
            console.log(error.response.data);
            alert(error.response.data.message)
            } else if (error.request) {
            console.log(error.request);
            } else {
            console.log('Error', error.message);
            }
        });
    }
</script>
```

## table 和 form 的结合验证提交
```html
<!DOCTYPE html>
<html>
<head>
	<title>form</title>
</head>
<script src="https://cdn.bootcss.com/jquery/1.8.0/jquery-1.8.0.js"></script>
<body>
<table  border="2" align="center">
<tr>
	<form></form>
	<th><input type="radio" name="godMode" value="1" onclick="changeHandler(this)" />关</th>
	<th><input type="radio" name="godMode" value="0" onclick="changeHandler(this)" />开</th>
	<th><input type="radio" name="iosFunctionSwitch" value="1" onclick="changeHandler(this)" />关</th>
	<th><input type="radio" name="iosFunctionSwitch" value="0" onclick="changeHandler(this)" />开</th>
	<th><input type="button" onclick="confirmHandler(this)" value="确认" /></th>
</tr>
<tr>
	<form></form>
	<th><input type="radio" name="godMode" value="1" onclick="changeHandler(this)" />关</th>
	<th><input type="radio" name="godMode" value="0" onclick="changeHandler(this)" />开</th>
	<th><input type="radio" name="iosFunctionSwitch" value="1" onclick="changeHandler(this)" />关</th>
	<th><input type="radio" name="iosFunctionSwitch" value="0" onclick="changeHandler(this)" />开</th>
	<th><input type="button" onclick="confirmHandler(this)" value="确认" /></th>
</tr>
</table>
<form name="myForm" action="/e:">
	<input type="text" name="name">
	<input type="text" name="age">
	<input type="submit" value="submitBtn">
	<input type="button" value="Click Me" onclick="formHandler()">
</form>
<script type="text/javascript">
	function changeHandler(e) {
		console.log("e.name", e.name)
		console.log($(e).attr("name"))
		console.log($(e).parent().siblings("form").attr($(e).attr("name"), $(e).val()))
	}

	function confirmHandler(e) {
		console.log(validate(e))
	}

	function formHandler() {
		console.log(myForm)  				// 打印出的就是DOM中的form元素
		console.log(myForm.name)			// 打印出input元素
		console.log(myForm.name.value)		// 拿到input的输入值，不填为空""
		console.log(myForm.name.value === "")  // true
	}

	function validate(ele) {
		const godMode = $(ele).parent().siblings("form").attr("godMode")
		const iosFunctionSwitch = $(ele).parent().siblings("form").attr("iosFunctionSwitch")
		if(!godMode) {
			alert("godMode 不能为空")
		} else if(!iosFunctionSwitch) {
			alert("iosFunctionSwitch 不能为空")
		}
		return {godMode, iosFunctionSwitch}
	}
</script> 
</body>
</html>
```

## onclick 返回一个confirm
```html
<a href="/apply_notice" role="button" class="btn btn-success" data-toggle="modal"
 onclick="return confirm('Sending the announcement ,are you sure?');">
发送
</a>
<br>
<button onclick="return confirm('Sending the announcement ,are you sure?');">send</button>
<br>
<div onclick="return confirm('Sending the announcement ,are you sure?');">div click</div>
```
3种点击都会触发 confirm, 只有<a> 点击确定后会跳转href="/apply_notice"
