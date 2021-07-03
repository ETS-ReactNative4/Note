## 配置 add configration
1. 点击+ ，go build
2. run kind - package
3. go tool arguments -i 删掉
4. 保存

## 快捷键
### 格式化结构体struct
```go
type listObj struct {
		Id             int64           `json:"id"`
		UserName       string          `json:"name"`
		NickName          string          `json:"nickname"`
		Phone          string          `json:"phone"`
		Email          string          `json:"email"`
		Avatar         string          `json:"avatar"`
		Status         enums.UserStatus `json:"status"`
	}
```
选中代码 alt+command+l
```go
type listObj struct {
		Id       int64            `json:"id"`
		UserName string           `json:"name"`
		NickName string           `json:"nickname"`
		Phone    string           `json:"phone"`
		Email    string           `json:"email"`
		Avatar   string           `json:"avatar"`
		Status   enums.UserStatus `json:"status"`
	}
```