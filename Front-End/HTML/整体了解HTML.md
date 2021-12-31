https://www.tutorialspoint.com/html/index.htm

## select option
https://www.cnblogs.com/time1997/p/13816593.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
    <style>
        #masker {
            background-color: #fff;
            width: 110px;
            height: 16px;
            position: absolute;
            top: -12px;
            left: 2px;
            text-align: center;
            line-height: 18px;
        }
    </style>
</head>
<body style="position: relative;">
    <select id="sel">
        <option value="中国 +86" label="中国 +86"></option>
        <option value="美国 +1" label="美国 +1"></option>
        <option value="阿尔及尼亚 +1009" label="阿尔及尼亚 +1009"></option>
    </select>
    <p id="masker">+86</p>
    <script>
        $("#sel").change(function(e) {
            console.log(e.target.label)
            $("#masker").text(e.target.value.split(" ")[1])
            document.getElementById("sel").setAttribute("size", 0);
        })
        $("#masker").click(function() {
            console.log('----')
            document.getElementById("sel").setAttribute("size", 5);
        })
    </script>
</body>
</html>
```