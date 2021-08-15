> 尽管越来越多的百度自家产品出现在了搜索结果的页面中，加上百度竞价，留给自然排名的位置越来越少，但是通过SEO优化提高百度关键词排名获得流量依旧是最稳定廉价的营销方法。

一个好的网站，一份好的SEO方案依旧可以为企业带来非常可观订单。

1. 提高百度关键词排名秘籍一：出身高贵。
一般来说，搜索引擎会给每一个网站都有临时权重，临时权重的周期一般是7-15天，如果网站”出身高贵”,这个临时权重就会延下去，否则失去临时权重，网站就会耽误3-6个月。

2. 提高百度关键词排名秘籍二：像模像样。
域名是非常重要的，选择一个注册年份较高的域名，对网站的发展也非常有作用。其次就是域名的品相，越简短，越容易记忆的域名是更容易获得用户的青睐的。这对后续SEO也非常有用。

3. 提高百度关键词排名秘籍三：满腹经纶。
网站上线之前，我们就要对网站所在的行业进行深入的研究，分析关键词背后的用户需求，为每一个关键词准备优质的关键词着陆页。这样我们的网站一旦上线就能很容易被搜索引擎认可。

4. 提高百度关键词排名秘籍四：孜孜不倦。
SEO过程中一定要有孜孜不倦的精神，不能发了几天的文章觉得关键词没有排名就开始更换关键词或者改变文章发布方法。SEO最难的就是每一步的改变都不会立即反应出来，今天发布的文章或许要几天升值几十天才能见效。

5. 提高百度关键词排名秘籍五：知己知彼。
SEO切记不可闭门造成，我们要随时留意竞争对手的网站，看看排名前三位的网站发布的内容。

6. 提高百度关键词排名秘籍六：有权有势。
有权有势的前提是自身要有足够的能力，如果一个网站自身内容非常空洞，仅仅依靠外链提升了网站关键词排名，这样的排名只能是昙花一现，最终会被用户抛弃。

7. 提高百度关键词排名秘籍七：持之以恒。

## 网站优化之sitemap.xml网站地图的写法
网站地图爬虫在线工具 v5.1.9 
https://help.bj.cn/

Google：建议使用xml格式的网站地图

地图提交地址：https://www.google.com/webmasters/tools/dashboard?hl=zh-CN

Baidu:建议使用robots.txt提交html格式的网站地图

http://www.baidu.com/search/url_submit.html

网站地图制作提交步骤：
* 生成网站地图
* 下载地图文件sitemap.xml并上传至网站根目录
* 到站长平台提交网站地图


## HTML <meta> 标签
<meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

<meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。

## name 属性
author
description
keywords
generator
revised
others

类似这样的 meta 标签可能对于进入搜索引擎的索引有帮助：
<meta name="keywords" content="HTML,ASP,PHP,SQL">

## 总结
### TDK完善，包括title、description、keywords，前端页面和后台推送都要添加，如下
```html
<meta name="baidu-site-verification" content="TI4ZF9Ar4h" />
<meta name="keywords" content="北京治疗近视眼医院,北京近视眼矫正,北京好的眼科医院,北京朝阳区眼科医院">
<meta name="description" content="北京眼科医院,北京治疗近视眼科医院,北京近视矫正,北京朝阳区眼科医院,北京***医院是北京好的眼科医院,我院采用先进的飞秒手术,国内外专家就诊.治疗近视选择北京眼科.24小时咨询电话****">

<!-- 添加禁止转码标记： -->
<meta http-equiv="Cache-Control" content="no-transform">
<meta http-equiv="Cache-Control" content="no-siteapp">

<!-- 添加引导抓取标记： -->
<meta name="Robots" Content="index,follow">

<!-- 添加页面属性标记： -->
<meta name="applicable-device" content="pc,mobile">
```

<!-- 添加权重标记： -->
### [canonical URL](https://www.1deng.me/canonical-url.html)
什么是 canonical URL 标签？
canonical URL标签也叫规范网址，出现在你网页代码的<head>里。

以一灯博客为例，canonical URL标签的代码长下面这个样子。
什么是 canonical URL 标签？
首先，各大搜索引擎对网站SEO的考量包括了这个标签
其次，很多网站SEO的问题就是不同的URL对应同一个页面内容。

以我们常见的产品页面的URL为例，大部分外贸独立站可能是下面这个样子。

https://www.yourdomain.com/products/

一旦你的产品多了有了分页就会自动生成一个新的URL。

https://www.yourdomain.com/products/page/2/

如果不做canonical URL标签优化，就搜索引擎机器人来看，上面两个URL的页面内容是一样的，所以机器人不知道到底要把哪个URL编入搜索结果里，也不知道哪个页面才是重要的。

无形间的重复内容，大大降低了页面在搜索引擎的重要性，页面权重也全都分散了。

虽然谷歌官方的说法是重复内容不直接影响SEO，但我可以很负责的告诉大家，大量的重复内容会分散你网站本该有的排名。有很多种办法可以处理重复内容，但最有效的还是用canonical URL标签把网址规范化。

否则谷歌会分不清楚你网站重复内容的页面哪个重要，哪个不重要。

而canonical URL标签的目的就是告诉谷歌把你重要的页面和其它页面区别对待，在搜索结果中只显示唯一的URL，规范URL的结构，让其它重复内容的URL指向最主要的那个URL。

将链接权重传递到主页面。

如何将 canonical URL 标签添加到你的网站？
canonical URL标签出现在网页代码的<head>里。

你可以先检查一下你的外贸独立站，随便打开一个页面。

鼠标右键查看网页源代码Ctrl+F搜索canonical这个词，看看有没有搜索结果。

如果能搜到，说明你的网站已经做了canonical URL标签优化，如果没有，安装插件就能解决。

以最常用的 Yoast SEO 插件为例，一般安装了就会为每个页面自动生成canonical URL标签。

但还有一种情况需要你手动设置。

比如你是做商城的，种类多，产品多，上新的时候，可能类似的产品就换了几张图，但参数，甚至描述都一样，URL如下。

https://www.yourdomain.com/分类A/产品/
https://www.yourdomain.com/分类B/产品/
又或是这样。

https://www.yourdomain.com/分类A/产品1/
https://www.yourdomain.com/分类A/产品2/
虽然两个页面的URL不同，但内容几乎都是一摸一样的，这个时候只能手动设置canonical URL标签来区别这个两个页面，让搜索引擎知道哪个更重要。

总结
canonical URL标签优化的定义，为什么要做，怎么做就介绍完了。

你可以安装yoast插件或者其它SEO插件来实现，但一些质量比较高的主题，比如avada，它的源代码本身就经过了canonical URL标签优化，这也是为什么它销量第一的其中一个原因。

最后，今天介绍的canonical URL的链接传递和301重定向是两回事，请不要把两者混淆了。

canonical URL是告诉搜索引擎你重复内容的URL哪一个才是最规范，最重要的，实际没有跳转。

canonical URL标签虽然能传递链接，告诉搜索引擎URL的唯一性和规范网址结构，但如果把它当301重定向用就有点过头了。

我见过有人想把某个页面的SEO排名顶上去，把首页的canonical URL都指向了想做排名的页面，搞到最后排名没上去，连首页都不收录了，哎......鸡飞蛋打想太多。

### 栏目页旁边要加推荐文章，10条左右
文章详情页下面加本栏目的相关文章
旁边加其他栏目的推荐文章

### 每个页面都要加h1 h2内容，h1标题，要惟一；h2其他栏目名

### 首页的图片上，加title，把想加的关键词均匀分布在图片的title上

### sitemap生成
生成sitemap（Sitemap 可方便网站管理员通知搜索引擎他们网站上有哪些可供抓取的网页）生成的链接页面里，内容是网站的静态路径，用于每天百度收录。


