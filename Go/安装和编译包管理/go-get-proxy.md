## [一键解决 go get golang.org/x 包失败](https://shockerli.net/post/go-get-golang-org-x-solution/)

我们知道从 Go 1.11 版本开始，官方支持了 go module 包依赖管理工具。

其实还新增了 GOPROXY 环境变量。如果设置了该变量，下载源代码时将会通过这个环境变量设置的代理地址，而不再是以前的直接从代码库下载。这无疑对我等无法科学上网的开发良民来说是最大的福音。

https://goproxy.io/zh/
### 您只需通过简单设置
Bash (Linux or macOS)
```
# 配置 GOPROXY 环境变量
export GOPROXY=https://goproxy.io,direct
```

PowerShell (Windows)
```
# 配置 GOPROXY 环境变量
$env:GOPROXY = "https://goproxy.io,direct"
```

### GOPROXY 环境变量 https://goproxy.io/zh/
如果您使用的 Go 版本是 1.13 及以上 （推荐）
```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.io,direct
```

## go get + 包名 下载依赖
```
go get github.com/google/flatbuffers
```
执行完成后 在项目External Libraries - Go Modules 已经存在，接下来导入

