> ES6 的Class只是面向对象那个编程的语法糖，升级了ES5的构造函数的原型链继承的写法，
Class并没有解决模块化的问题。ES6之前，社区制订了模块加载方案，主要有CommonJS和AMD。
前者用于服务器，后者浏览器。

## 严格模式

https://www.cnblogs.com/fayin/p/6831071.html
首先我们要明白一个前提，CommonJS模块规范和ES6模块规范完全是两种不同的概念。

## CommonJS模块规范
module.exports 或者 exports 是一个特殊的对象，是 Node.js 中每个js文件默认就存在的。
无论是给 module.exports 赋值，还是给 exports 赋值，都会被作为一个模块暴露除去。 

> The following example exposes simple string message as a module in Message.js.
1. 模块直接导出的是一个字符串
```
// message.js
module.exports = "Hello world";

// or
exports = 'Hello world';

Now, import this message module and use it as shown below.
// app.js
var msg = require('./Messages.js');

console.log(msg);
```

> exports 是一个对象。你可以给它添加属性或者方法。

## 模块导出一个属性变量 为字符串
···
// message.js
exports.SimpleMessage = 'Hello world';

//or
module.exports.SimpleMessage = 'Hello world';


//app.js
var msg = require('./Messages.js');

console.log(msg.SimpleMessage);
···
In the above example, require() function will return an object { SimpleMessage : 'Hello World'}


## 导出一个function
```
// log.js
module.exports.log = function (msg) { 
    console.log(msg);
};

// app.js
var msg = require('./Log.js');
msg.log('Hello World');
```
The above module will expose an object- { log : function(msg){ console.log(msg); } } . Use the above module as shown below.

> You can also attach an object to module.exports as shown below.

## 导出一个对象
```
// data.js
module.exports = {
    firstName: 'James',
    lastName: 'Bond'
}

// app.js
var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);
```

## ES modules 
```
// lib.js
export const sqrt = Math.sqrt;

export function square(x) {
    return x * x;
}

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}


// main.js
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// or
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```

Default exports (one per module)
```
// myFunc.js
export default function () { ... };

// main.js
import myFunc from 'myFunc';
myFunc();
```

### node 执行ES6语法报错
SyntaxError: Cannot use import statement outside a module

错误警告其实已经给出了解决方案，在package.json文件中设置"type": "module"。


## AMD
[Asynchronous Module Definition ](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)

## RequireJS 
RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.