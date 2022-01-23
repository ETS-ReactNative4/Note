https://www.educba.com/typescript-type-vs-interface/

## What is TypeScript?

TypeScript has a lot of features like compile-time checking, 

type inference, type erasure, interfaces, enumerated type, generic, namespaces, tuple, await, classes, modules, optional or default parameters, anonymous functions.

It is more scalable and we can build robust components. It is independent of platform, browser and operating system also. It presents the method for the developer to express variables, arrays, and properties in a non-standard javascript way.

TypeScript is superior to other scripting languages comparatively like Dart. 

## Why TypeScript?

TypeScript does not require a specific environment setup for the execution. It can be run where JavaScript can run easily. The benefits of using the typescript are that it will compile the code and check the compilation errors. 

It also finds the syntax error and tells before the running of the script.

## Type category

Type can be of three types: 
1. Any type: – By using any data type, it means type checking for a variable cannot be done. 

2. Built-in type: – the data types which are already there in a system like a number, string, boolean, void, null and undefined. Null means that the variable has been set to an object whose value is undefined. Undefined means that the variable has no value or object assigned to it. 

3. User-defined data types: – the data types which are declared by the user like enums, classes, arrays, etc. One of the types is also referred to as Type Alias

### interface

TypeScript interface refers to the syntax that a system needs to follow. It is a virtual structure that exists within the context of typescript. It is mainly used for type checking purposes.

An interface also defines the methods and events. It contains the only declaration of the members. Interface members should be declared by the derived class.




➜  ~ sudo npm install -g typescript


➜  ~ tsc -v
Version 3.5.3

## 为什么要TypeScript

1. 为JavaScript提供一个可选择的类型检查系统；
2. 为JavaScript提供一个包含将来新特性的版本。

TypeScript的核心价值体现在第一点，第二点可以认为是TypeScript的向后兼容性保证，也是TypeScript必须要做到的。

经过像Google、Microsoft、FaceBook这样的大公司实践表明，类型检查对于代码可维护性和可读性是有非常大的帮助的，尤其针对于需要长期维护的规模性系统。


在JS里，两个等号的判断会进行隐式的类型转换，如：
```
console.log(5 == "5"); // true 
console.log(0 == "");  // true
```

## 常用命令
```
tsc

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
```
1. 使用 tsc --init 创建tsconfig  [配置参数详情](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
2. 使用 tsc -w 监听项目目录下所有.ts 文件 并编译成.js  可以配合tsconfig 缩小监听范围

## 编译 .ts
At the command line, run the TypeScript compiler:

```
tsc greeter.ts
```

## 学习实例
https://sequelize.org/

Sequelize 4.X 版本用JavaScript  5.X 版本使用TypeScript  可以对照学习

antd dva  redux

hexo

pandora

mysqldump

@types express
