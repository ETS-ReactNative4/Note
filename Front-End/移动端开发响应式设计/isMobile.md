```js
//js判断是否移动端
function fIsMobile(){
    return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
//js判断是否ios或Android
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

if (fIsMobile()) {
    var button = document.getElementById('download_btn');
    if (isAndroid) {
        button.href="https://f.aliyuncs.com/android_apk/faz.apk"
    } else if (isiOS) {
        button.href="itms-apps://itunes.apple.com/app/id1xxxxxx"
    }
}
```