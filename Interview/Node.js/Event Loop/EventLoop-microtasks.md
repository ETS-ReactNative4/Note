https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## What is the Event Loop?
The event loop is what allows Node.js to perform non-blocking I/O operations
Event loop 是 Node.js 实现异步非阻塞I/O操作的机制。[todo研究一下Java多线程处理并发的方法]

Two types: events and event handlers：
涉及到 事件 和 事件处理函数

Events can be, for example, low-level operating system events such as "file is ready to be written" or "there's a fresh new HTTP request coming our way". 
Event handlers are pieces of program code that are meant to be executed when that specific event takes place.
事件可以是 操作系统事件 如 文件读写，还可以是有新的 HTTP 请求进入的事件。Event handlers 是事件触发时要执行的代码。

Event loop repeatedly takes events and executes event listeners.
事件循环就是 重复的获取这些被放入队列的事件 并且 执行事件对应的处理函数 handler

**异步I/O的好处,适用于什么场景？与其他语言处理并发方式的差异？查看[0.NodeJS-使用场景](../0.%20NodeJS-使用场景.md)**

### NodeJs 的 Event Loop
NodeJs 的运行是这样的：

1. 初始化 Event Loop
2. 执行您的主代码。这里同样，遇到异步处理，就会分配给对应的队列。直到主代码执行完毕。
3. 执行主代码中出现的所有微任务：先执行完所有nextTick()，然后在执行其它所有微任务。
4. 开始 Event Loop
```
┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

### Tasks, microtasks, queues and schedules
[oo](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly)

Take this little bit of JavaScript:
```js
console.log('script start');

// 异步
Promise.resolve().then(function() {
  console.log('promise');
}).then(function() {
  console.log('promise-then');
});

// 异步
setImmediate(function() {
    console.log('setImmediate')
})

// 异步
setTimeout(function() {
    console.log('setTimeout 0')
}, 0)

// 异步
setTimeout(function() {
    return new Promise(resolve => {
        console.log('setTimeout-delay 100ms promise')
        resolve()
    }).then(res => {
        console.log('setTimeout-delay 100ms promise.then')
    })
}, 100)

// 在所有异步任务之前执行，官方认为在递归中用process.nextTick会造成饥饿event loop，因为nextTick没有给其他异步事件执行的机会，递归中推荐用setImmediate
process.nextTick(function() {
    console.log('process.nextTick')
})

console.log('script end');

/* In what order should the logs appear?
script start
script end
process.nextTick
promise
promise-then
setTimeout 0
setImmediate
setTimeout-delay 100ms promise
setTimeout-delay 100ms promise.then
*/
```

如果想要了解为什么是这个顺序，就要知道event loop是如何处理 宏任务 和 微任务

### [任务队列](https://segmentfault.com/a/1190000011198232 反而是这篇文章给出了一个清晰的划分)
Js 中，有两类任务队列：宏任务队列（macro tasks）和微任务队列（micro tasks）。宏任务队列可以有多个，微任务队列只有一个。
那么什么任务，会分到哪个队列呢？

- 宏任务：script（全局任务）, setTimeout, setInterval, setImmediate, I/O, UI rendering.
- 微任务：process.nextTick, Promise, Object.observer, MutationObserver.

process.nextTick()方法可以在当前"执行栈"的尾部-->
下一次Event Loop（主线程读取"任务队列"）之前-->
触发process指定的回调函数。也就是说，它指定的任务总是发生在所有异步任务之前，当前主线程的末尾。

### 浏览器的 Event Loop
浏览器的 Event Loop 遵循的是 HTML5 标准，而 NodeJs 的 Event Loop 遵循的是 libuv。 区别较大，分开讲。

我们上面讲到，当stack空的时候，就会从任务队列中，取任务来执行。浏览器这边，共分3步：

1. 取一个宏任务来执行。执行完毕后，下一步。
2. 取一个微任务来执行，执行完毕后，再取一个微任务来执行。直到微任务队列为空，执行下一步。
3. 更新UI渲染。
   
Event Loop 会无限循环执行上面3步，这就是Event Loop的主要控制逻辑。其中，第3步（更新UI渲染）会根据浏览器的逻辑，决定要不要马上执行更新。

1. 
实现有序数组的排序 [1, 3, 5] [2, 4, 6] -> [1, 2, 3, 4, 5, 6]