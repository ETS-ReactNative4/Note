## 标签被修改
插入的video会变成uni-video，如果实在需要video标签，可以动态插入：
```js
const video = document.createElement("video");
        video.setAttribute('id', 'tcPlayerScriptId');
        video.setAttribute('preload', 'auto');
        video.setAttribute('playsinline','true');
        video.setAttribute('webkit-playsinline','true');
        document.getElementById('player').appendChild(video);
```