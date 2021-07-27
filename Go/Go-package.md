## [os](https://golang.google.cn/pkg/os/)
### os.Setenv / os.Getenv
```go
package main

import (
	"fmt"
	"os"
)

func main() {
	os.Setenv("NAME", "gopher")
	os.Setenv("BURROW", "/usr/gopher")

	fmt.Printf("%s lives in %s.\n", os.Getenv("NAME"), os.Getenv("BURROW"))

}
```
可以在启动的时候 加上环境变量
➜  go-server git:(gin) ✗ go build
➜  go-server git:(gin) ✗ ENV=dev ./go-server

log.Println("ENV", env)

2021/07/26 16:53:34 ENV dev

## [fmt](https://golang.google.cn/pkg/fmt/)
### fmt.Sprintf


## [io/fs/ioutil](https://golang.google.cn/pkg/io/)
### ioutil.ReadFile
```go
cp := fmt.Sprintf("./config/%s.json", env)
c, err := ioutil.ReadFile(cp)
```