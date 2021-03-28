> 组成结构体类型的那些数据称为 字段（fields）。每个字段都有一个类型和一个名字；在一个结构体中，字段名字必须是唯一的。

## 结构体的定义和初始化
```go
// 结构体的创建
type identifier struct {
	field1 type1
	field2 type2
	…
}
ms := new(identifier)
// 上下2种写法是等价的 下边的还进行了赋值
// 初始化：
ms := &identifier{10, 15.5, "Chris"}


// 更简单的结构体：下面的声明方式也是合法的语法，它更适用于简单的结构体。
type T struct {a, b int} 
// 然后像下面这样给它的字段赋值：
var s T
s.a = 5
s.b = 8

// 使用 new 函数给一个新的结构体变量分配内存，它返回指向已分配内存的指针：var t *T = new(T) 写这条语句的惯用方法是：
t := new(T)
// 变量 t 是一个指向 T的指针，此时结构体字段的值是它们所属类型的零值。
// t 通常被称做类型 T 的一个实例（instance）或对象（object）
```

### struct使用实例
```go
package main
import "fmt"

type struct1 struct {
	i1 int
	f1 float32
	str string
}

func main() {
	ms := new(struct1)
	ms.i1 = 10
	ms.f1 = 15.5
	ms.str = "Chris"

	fmt.Printf("The int is: %d\n", ms.i1)
	fmt.Printf("The float is: %f\n", ms.f1)
	fmt.Printf("The string is: %s\n", ms.str)
	fmt.Println(ms)
}
```
输出：
The int is: 10
The float is: 15.500000
The string is: Chris
&{10 15.5 Chris}


## 结构体的数据类型
结构体的字段可以是任何类型，甚至是结构体本身, 也可以是函数或者接口.
```go
type BattleResultServer struct {
	UnsentRecords []*UnsentRecord
}

var BattleResultInstance *BattleResultServer
// 以上定义的指针变量可以存储结构体变量的地址
```

## 结构体的方法
```go
package main
import (
	"fmt"
	"strings"
)

type Person struct {
	firstName string
	lastName string
}

func formatPersonName(p *Person) {
	p.firstName = strings.ToUpper(p.firstName)
	p.lastName = strings.ToUpper(p.lastName)
}

func main() {
	// struct Person as a value type: 作为值类型使用 
	var per1 Person
	per1.firstName = "Chris"
	per1.lastName = "Woodward"
	formatPersonName(&per1)
	fmt.Printf("The name of the person is %s %s\n", per1.firstName, per1.lastName)

	// struct Person as a pointer: 作为指针 不需要加 var
	per2 := new(Person)
	per2.firstName = "Jacky"
	per2.lastName = "Chen"
	formatPersonName(per2)
	fmt.Printf("The name of the person is %s %s\n", per2.firstName, per2.lastName)

	// as a literal: 字面量声明
	per3 := &Person{"Jj","Lin"}
	formatPersonName(per3)
	fmt.Printf("The name of the person is %s %s\n", per3.firstName, per3.lastName)
}
// The name of the person is CHRIS WOODWARD
// The name of the person is JACKY CHEN
// The name of the person is JJ LIN
```

## 方法返回一个结构体
```go
type RoomMgr struct {
	nextIndex    int
	agentToRoom  map[gate.Agent]*Room
	rooms        map[int]*Room
	maxRoomCount int
}

func CreateRoomMgr(maxRoomCount int) *RoomMgr {
	roomMgr := &RoomMgr{} // 初始化 相当于 roomMgr := new(RoomMgr) 表达式 new(Type) 和 &Type{} 是等价的
	roomMgr.maxRoomCount = maxRoomCount
	roomMgr.agentToRoom = make(map[gate.Agent]*Room)
	roomMgr.rooms = make(map[int]*Room, 0)
	roomMgr.nextIndex = 0

	return roomMgr
}
```