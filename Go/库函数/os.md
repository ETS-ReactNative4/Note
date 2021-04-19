## os.Getenv
```go
if os.Getenv("ENV") == "prod" {
    log.Println("initializing tencent events listener")
    go handler.StartTencentEventsListener()
}
```