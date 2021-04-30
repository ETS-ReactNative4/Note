[H5直播系列二 MSE(Media Source Extensions)](https://www.jianshu.com/p/1bfe4470349b)

我们可以把<video>标签看做拥有解封装和解码功能的浏览器自带播放器。随着视频点播、直播等视频业务的发展，视频通过流媒体传输协议（目前常用的有两种，MPEG-DASH和Apple的HLS）从服务器端分发给客户端，媒体内容进一步包含在一层传输协议中，这样<video>就无法识别了。以HLS为例，将源文件内容分散地封装到了一个个TS文件中。

仅靠<video>标签无法识别这样的TS文件，那么就引入了MSE拓展来帮助浏览器识别并处理TS文件，将其变回原来可识别的媒体容器格式，这样<video>就可以识别并播放原来的文件了。那么支持HTML5的浏览器就相当于内置了一个能够解析流协议的播放器。

> hls实际会先通过 ajax（loader 是可以完成自定义的） 请求 m3u8文件，然后会读取到文件的分片列表，以及视频的编码格式，时长等。随后会按照顺序(非 seek )去对分片进行请求，这些也是通过 ajax 请求二进制的文件，然后借助 [Media Source Extensions](https://w3c.github.io/media-source/) 将 buffer 内容进行合流，然后组成一个可播的媒体资源文件。

## [hls.js 源码解读](https://www.jackpu.com/hls-js-yuan-ma-jie-du-1/)
我们在深入代码之前，可以看下基本使用，可以让页面跑起来。
```html
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<video id="video"></video>
<script>
  if(Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
 }
</script>
```

其中如果你希望自己生成 m3u8 的文件，你可以使用 [ffmpeg](https://www.ffmpeg.org/) 进行处理，将单一的 mp4 拆分成多个分片文件。
```
ffmpeg -i your_file.mp4 -b:v 1M -g 60 -hls_time 2 -hls_list_size 0 -hls_segment_size 500000 output.m3u8
```