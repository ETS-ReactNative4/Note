## make chan
```go
/*
func make(t Type, size ...IntegerType) Type
指出该值在同一时刻最多可以容纳 size 个元素值。

如果我们发送给该通道的元素值未被取走，那么该通道最多可以暂存（或者说缓冲）size 个元素值。
*/
package main

import (
        "fmt"
        "time"
)

func main() {
        size := 0
        c1 := make(chan int, size)
        go func() {
                for i := 0; i < 4; i++ {
                        val := i*10 + 7
                        fmt.Println(time.Now().Format(time.RFC3339Nano), "<- ", val, "at", i)
                        c1 <- i*10 + 7
                }
                c1 <- 0
        }()

        time.Sleep(time.Second * 3)
        fmt.Println("After Sleep")

        for val := range c1 {
                fmt.Println(time.Now().Format(time.RFC3339Nano), "receive:", val)
                if val == 0 {
                        break
                }
        }
}
/*
c1 := make(chan int,size) 中的size修改为不同值, 会有不同的输出效果

2021-03-31T11:55:44.46146+08:00 <-  7 at 0
After Sleep
2021-03-31T11:55:47.467351+08:00 receive: 7
2021-03-31T11:55:47.468285+08:00 <-  17 at 1
2021-03-31T11:55:47.468331+08:00 <-  27 at 2
2021-03-31T11:55:47.468406+08:00 receive: 17
2021-03-31T11:55:47.468426+08:00 receive: 27
2021-03-31T11:55:47.468436+08:00 <-  37 at 3
2021-03-31T11:55:47.468445+08:00 receive: 37
2021-03-31T11:55:47.468452+08:00 receive: 0
*/
```
