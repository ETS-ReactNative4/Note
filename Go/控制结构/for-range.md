## for-range遍历字符串
```go
package main

import (
	"fmt"
)

type Player struct {
	id   int
	name string
}

type Room struct {
	Players []*Player
}

func (room *Room) setPlayer() {
	room.Players = append(room.Players)
}

func main() {
	str := "Go is a beautiful language!"
	fmt.Printf("The length of str is: %d\n", len(str))
	for pos, char := range str {
		fmt.Printf("Character on position %d is: %c \n", pos, char)
	}

	// var Players = make([]int, 5)

	// for _, p := range Players {
	// 	fmt.Printf("p.name %v, p.id %d", p.name, p.id)
	// }
}
```

## continue
form.AdminIdList = [1, 2, 3, ...]
```go
for _, v := range form.AdminIdList {
	var teamMember crm.TeamMember
	has, err = db.CrmHandler.GetOne(&teamMember, teamMember.GetTableName(), "admin_id", v)
	if err != nil {
		common.HandleResponse(ctx.Context, code.BadRequest, nil, err.Error())
		return
	}

	if has {
		continue
	}

	teamMember.TeamId = form.TeamId
	teamMember.AdminId = v
	teamMember.CreateTime = time.Now().Unix()
	teamMember.UpdateTime = time.Now().Unix()

	if err = db.CrmHandler.Save(&teamMember, teamMember.GetTableName()); err != nil {
		common.HandleResponse(ctx.Context, code.BadRequest, nil, err.Error())
		return
	}
}
```
