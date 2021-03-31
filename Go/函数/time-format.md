## time format
```go
package main

import (
        "time"
        "fmt"
)

func main(){
        now := time.Now()
        fmt.Printf("fmt.Printf当前时间: %d-%d-%d %d:%d:%d\n", now.Year(), now.Month(), now.Day(), now.Hour(), now.Minute(), now.Second())
        dateString := fmt.Sprintf("fmt.Sprintf当前时间为: %d-%d-%d %d:%d:%d\n",now.Year(),now.Month(),now.Day(),now.Hour(),now.Minute(),now.Second())
        fmt.Println(dateString)
        fmt.Println(now.Format("2006-01-02 15:04:05"))
        fmt.Println(now.Format("2006/01/02 15:04:05"))
        fmt.Println(now.Format("2006/01/02"))
        fmt.Println(now.Format("15:04:05"))
}
/*
fmt.Printf当前时间: 2021-3-31 11:31:27
fmt.Sprintf当前时间为: 2021-3-31 11:31:27

2021-03-31 11:31:27
2021/03/31 11:31:27
2021/03/31
11:31:27
*/
```
