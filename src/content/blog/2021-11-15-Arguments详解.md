---
title: "Arguments详解"
pubDate: "2021-11-15"
updateDate: ""
description: "Arguments详解"
author: "ch_kai"
image:
    url: ""
    alt: "this is photo"
tags: ["JavaScript"]
draft: true
---
# Arguments

+ 概念：是一个对应于传递给函数的参数的类数组对象

+ 类型

```js
function d1() {
	console.log(typeof arguments) // object
    console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
}
d1(23,1,2)
```

+ 可遍历

```js
function d() {
    for (const i of arguments) {
        console.log(i) // 2 32 44  Number类型
    }
    for (i in arguments) {
        console.log(i) // 0 1 2  字符串类型
    }
}
d(2, 32, 44)
```

> for..in 和 for..of都是可以遍历的

+ 想获得真实数据

```js
function d2() {
	console.log(Array.from(arguments)) // [1,33,22]
    console.log([...arguments]) // [1,33,22]
}
d2(1,33,22)
```



## 属性值

### callee

+ 概念：指向参数所属的当前指向函数

```js
function d2() {
	console.log(arguments.callee)
 /*
    打印:function d2() {
	console.log(arguments.callee)
	}
*/
}
d2(1,2,33,1,1,1)
```



### length

+ 概念：传递给函数的参数数量

```js
function d2() {
	console.log(arguments.length) // 6
}
d2(1,2,33,1,1,1)
```

## 严格模式下和非严格模式下的特性

1. 在严格模式下，剩余参数、默认参数和解构赋值参数的存在不会改变 arguments对象的行为，但是在非严格模式下就有所不同了。

```js
function func(a) {
   'use strict'
   console.log(arguments) // 打印其中arguments[0]值为 10
   arguments[0] = 99;
   console.log(arguments) // 打印其中arguments[0]值为 99
   console.log(a); // 10
}
func(10);
```

2. 当非严格模式中的函数**没有包含剩余参数、默认参数和解构赋值**，那么arguments对象中的值**会跟踪参数的值**（反之亦然）。

```js
function func2(a) {
    console.log(arguments) // 打印其中arguments[0]值为 10
    arguments[0] = 99
    console.log(arguments) // 打印其中arguments[0]值为 99
    console.log(a) // 99
}
 func2(10)
```

3. 当非严格模式中的函数**有包含剩余参数、默认参数和解构赋值**，那么arguments对象中的值**不会跟踪参数的值**（反之亦然）。相反, arguments反映了调用时提供的参数：

```js
function func3(a = 11) {
    console.log(arguments) // 打印其中arguments[0]值为 10
    arguments[0] = 99
    console.log(arguments) // 打印其中arguments[0]值为 99
    console.log(a) // 10
}
func3(10)
```

### arguments[@@iterator]

> 这个暂时不知道怎么用？以后慢慢了解

## 兼容性

|           | Chrome | internetExplorer | firefox |
| --------- | ------ | ---------------- | ------- |
| arguments | 1      | 3                | 1       |
| callee    | 1      | 6                | 1       |
| length    | 1      | 4                | 1       |
