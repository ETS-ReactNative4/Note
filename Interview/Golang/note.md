> 面试题整理

https://github.com/lifei6671/interview-go

https://studygolang.com/articles/17796

实名反对高票答案，全是些cgo的问题，真正跟go核心相关的channel，goroutine都没问。

而且各种假大空，动不动就性能，我特么10w长度的slice都没性能问题，你这动不动就要优化底层数据结构？

有这功夫不如看看channel，slice，map，这些数据结构怎么实现的，免得以后死锁，slice扩容这种问题踩坑。

- uint不能直接相减，结果是负数会变成一个很大的uint，这点对动态语言出身的会可能坑。
- channel一定记得close。goroutine记得return或者中断，不然容易造成goroutine占用大量CPU。
- 从slice创建slice的时候，注意原slice的操作可能导致底层数组变化。如果你要创建一个很长的slice，尽量创建成一个slice里存引用，这样可以分批释放，避免gc在低配机器上stop the world面试的时候尽量了解协程，线程，进程的区别。

- 面试的时候尽量了解协程，线程，进程的区别。明白channel是通过注册相关goroutine id实现消息通知的。
- slice底层是数组，保存了len，capacity和对数组的引用。
- 如果了解协程的模型，就知道所谓抢占式goroutine调用是什么意思。
- 尽量了解互斥锁，读写锁，死锁等一些数据竞争的概念，debug的时候可能会有用。
- 尽量了解golang的内存模型，知道多小才是小对象，为什么小对象多了会造成gc压力。

1. 使用Go语言编程实现堆栈和队列这两个数据结构，该如何实现。可以只说实现思路。
2. Go中，如何复制切片内容？如何复制map内容？如何复制接口内容？编程时会如何操作实现。
5. 04 Go 有异常类型吗？
6.  05 什么是协程（Goroutine）
7.  06 如何高效地拼接字符串
10. 09 Go 支持默认参数或可选参数吗？
11. 10 defer 的执行顺序
12. 11 如何交换 2 个变量的值？
13. 12 Go 语言 tag 的用处？
14. 13 如何判断 2 个字符串切片（slice) 是相等的？
15. 14 字符串打印时，%v 和 %+v 的区别
16. 15 Go 语言中如何表示枚举值(enums)？


## 基础知识
### = 和 := 的区别？
- = 是赋值语句 =要和 var 关键字一起使用；var可以在函数中使用，也可以在函数外使用，:=只能在函数中使用，所以只能定义局部变量。
- :=是声明类型（编译器帮你做的）并赋值
    ```go
    package main

    import (
        "fmt"
        "reflect"
    )

    d := 1
    func main() {
        var a = 3
        var b int = 5
        b = 6
        c := 8
        c :=4//提示错误,不能声明类型后，再声明类型
        c = 9//正常
        fmt.Println(a)
        fmt.Println(reflect.TypeOf(a))//int
        fmt.Println()
        fmt.Println(b)
        fmt.Println(c)
        //3
        //6
        //9

        fmt.Println(d)
    }
    // prog.go:5:1: syntax error: non-declaration statement outside function body
    ```

### 哪种写法更好？
var a []int 和 a := []int{} 是否有区别？如果有的话，具体有什么区别？在开发过程中使用哪个更好，为什么？

我们可以将它们简写为 a := 50 或 b := false
a 和 b 的类型（int 和 bool）将由编译器自动推断

这是使用变量的首选形式，但是它只能被用在函数体内，而不可以用于全局变量的声明与赋值。使用操作符 := 可以高效地创建一个新的变量，称之为初始化声明。

### 名称
1. 什么是 rune 类型: 查看[数据类型](../../Go/数据类型/类型汇总.md) rune // alias for int32
2. 

## 指针相关
### 指针的作用
Go 支持指针，允许你在程序中传递指针的引用给某些值。

## 结构体相关(struct)
### 结构体的定义和赋值
```go
type Show struct {
	Param
}

func main1() {
	s := new(Show)
	s.Param["RMB"] = 10000
}
// main函数名称不对❌；结构不能使用new实例化；结构体内的字段不能使用上面的赋值方式
// 正确做法：
package main

import "fmt"

type Vertex struct {
    X, Y int
}

var (
    v1 = Vertex{1, 2}
    v2 = Vertex{X: 1} // Y:0 is implicit - 隐式地赋值为0
    v3 = Vertex{}     // X:0 and Y:0
    P = &Vertex{1, 2} // has type *Vertex
)

func main() {
	fmt.Println(v1, v2, v3, p)
}
// {1 2} {1 0} {0 0} &{1 2}
```

### 空struct{}在什么情况下使用？
[How to improve your GO code with empty structs](https://medium.com/@l.peppoloni/how-to-improve-your-go-code-with-empty-structs-3bd0c66bc531)

The size of a struct is the sum of the size of the types of its fields, since there are no fields: no size!

- Free Maps
- Semaphores and tokens

### 结构体是否能够比较？该如何比较两个结构体？
如果结构体内的所有成员变量都是可以比较的，那么结构体就可以进行比较。否则不可比较。

那么哪些数据类型是可以比较的呢？
值类型的可以比较；引用类型不能比较
```go
package main

import "fmt"

type User struct {
    a int
}

func main() {
    a := User{a:1}
    b := User{a:1}
    c := User{a:2}

    fmt.Println(a == b) // true
    fmt.Println(b == c) // false
}
// 如果结构体中加入make(map[int]int) 这种字段比较时会报错：struct containing map[int]int cannot be compared
// 但是2个struct实例的的指针是可以比较的 只是2个物理地址比较永远都是false

// 2个不同的struct实例比较 结构体之间进行转换需要他们具备完全相同的成员(字段名、字段类型、字段个数)
func CantNotComparable() {
	p1 := People{
		name:   "wang",
		weight: 0,
	}
	p2 := User{
		name:   "wang",
		weight: 1,
	}
	p3 := People(p2)  // 进行结构体转换
	fmt.Println(p1 == p3)
}
```
优雅的转换结构体必然要用到反射，因而影响性能。对于类似的问题，go的设计哲学是推荐用生成器。比如这个proto插件：
https://link.zhihu.com/?target=https%3A//github.com/bold-commerce/protoc-gen-struct-transformer

### 如果有不能比较的filed，可以使用reflect.deepEqual
Using reflect.deepEqual also works, especially when you have map inside the struct
```go
package main

import "fmt"
import "time"
import "reflect"

type Session struct {
    playerId string
    beehive string
    timestamp time.Time
}

func (s Session) IsEmpty() bool {
  return reflect.DeepEqual(s,Session{})
}

func main() {
  x := Session{}
  if x.IsEmpty() {
    fmt.Print("is empty")
  } 
}
// With Go 1.13 it is possible to use the new isZero() method:
if reflect.ValueOf(session).IsZero() {
     // do stuff...
}
// I didn't test this regarding performance, but I guess that this should be faster, than comparing via reflect.DeepEqual().
```


### 如何比较两个接口？
要比较两个interface变量是否相等，首先需要理解interface的内部代表了什么。
和其他的变量相同，interface变量代表的也是它的类型和值。interface变量的值由两种元数据组成：
- Underlying Type
- UnderLying Value

![](https://i1.wp.com/golangbyexample.com/wp-content/uploads/2020/07/interface_1.jpg?w=351&ssl=1)

如果两个interface可以比较，那么
- interface value is nil or 
- The underlying type is the same and comparable. Underlying Value is also the same

Some of the comparable types as defined by go specification are:
- boolean
- numeric
- string
- pointer
- channel
- interface types
- structs – if all it’s field type is comparable
- array – if the type of value of array element is comparable

Some of the types which are not comparable as per go specification:
- slice
- map
- function

Two interface variable can be compared using == or != operators
```go
package main

import "fmt"

type animal interface {
    breathe()
    walk()
}

type lion struct {
    age int
}

func (l lion) breathe() {
    fmt.Println("Lion breathes")
}

func (l lion) walk() {
    fmt.Println("Lion walk")
}

func main() {
    var a animal
    var b animal
    var c animal
    var d animal
	var e animal
    
    a = lion{age: 10}
    b = lion{age: 10}
    c = lion{age: 5}

    fmt.Println(a == b)
    fmt.Println(a == c)
    fmt.Println(d == e) // Interface value is nil for both
}
// true
// false
// true
```
In the above program, we have animal interface and we have a lion struct that 
implements the animal interface by defining two of its methods.

Interface varible a 和 b 相等是因为：
- Underlying type is same: lion struct
- Underlying type is comparable: lion struct has only one field of int type and int type is comparable
- Underlying value is same: lion.age is 10 for both

[实例来源](https://golangbyexample.com//)


## 实现原理
- 01 init() 函数是什么时候执行的？
- 02 Go 语言的局部变量分配在栈上还是堆上？
- 03 2 个 interface 可以比较吗 ？
- 04 2 个 nil 可能不相等吗？
- 05 简述 Go 语言GC(垃圾回收)的工作原理
- 06 函数返回局部变量的指针是否安全？07 非接口非接口的任意类型 T() 都能够调用 *T 的方法吗？反过来呢？

## 并发编程
- 01 无缓冲的 channel 和有缓冲的 channel 的区别？
- 02 什么是协程泄露(Goroutine Leak)？
- 03 Go 可以限制运行时操作系统线程的数量吗？ 

## Go高级编程
[CGO基础](https://www.cntofu.com/book/73/ch2-cgo/ch2-02-basic.md)
