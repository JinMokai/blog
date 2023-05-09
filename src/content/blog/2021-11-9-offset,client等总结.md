---
title: "offset,client等总结"
pubDate: "2021-11-9"
updateDate: ""
description: "offset,client等总结"
author: "ch_kai"
image:
    url: ""
    alt: "This is an image placeholder, indicating that there is no image yet!"
tags: ["JavaScript"]
draft: true
---

# 前言

+ 总是搞不清楚各个属性的值关系，查查MDN，总结一下！👍

# window

| 语法                                        | 含义                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| window.innerHeight                          | 浏览器窗口视图高度;如果有滚动条，包括滚动条。（如果打开控制台在下方，控制台内容不包括视图高度） |
| window.innerWidth                           | 浏览器窗口视图宽度;如果有滚动条，包括滚动条。（如果打开控制台在下方，控制台内容不包括视图宽度） |
| window.outerHeight                          | 获取浏览器窗口外部的高度。表示整个浏览器窗口的高度，包括侧边栏（如果存在）、窗口镶边和调正窗口大小的边框 |
| window.outerWidth                           | 获取浏览器窗口外部的宽度。表示整个浏览器窗口的宽度，包括侧边栏（如果存在）、窗口镶边和调正窗口大小的边框 |
| window.pageXOffset(是window.scrollx的别名)  | 获取当前页面相对于窗口的X坐标   (>=ie 9) (用更专业的术语来说，scrollX返回当前视口左边缘的 X 坐标。如果没有视口，则返回值为 0) |
| window.pageYOffset(是window.scrollY的别名)  | 获取当前页面相对于窗口的Y坐标   (>=ie 9) (用更专业的术语来说，scrollY返回当前视口顶部的 Y 坐标。如果没有视口，则返回值为 0) |
| window.screenLeft(是window.screenX属性别名) | 获取屏幕左边缘和窗口左边缘的距离（以像素为单位）(>=ie 5)     |
| window.screenTop(是window.screenY属性别名)  | 获取屏幕顶部边缘和窗口顶部边缘的距离（以像素为单位）(>=ie 5) |

> 视图主要值浏览器我们所看到的页面。窗口一般指window的窗口

# Element

| 语法                 | 含义                                                         |
| -------------------- | ------------------------------------------------------------ |
| Element.clientHeight | 返回Number 表示内部相对于外层元素的高度 (height+padding - 水平滚动条高度 (如果存在)) |
| Element.clientwidth  | 返回Number 表示该元素内部的宽度 (width+padding - 垂直滚动条高度 (如果存在)) |
| Element.clientLeft   | 返回Number表示该元素距离它左边界的宽度 (左边框border-left)   |
| Element.clientTop    | 返回Number 表示该元素距离它上边界的高度 (上边框border-top)   |
| Element.scrollHeight | 返回类型为Number，表示元素的滚动视图高度(height+padding)     |
| Element.scrollWidth  | 返回类型为 Number ，表示元素的滚动视图宽度(width+padding)    |
| Element.scrollLeft   | 返回类型为Number，表示该元素横向滚动条距离最左的位移.        |
| Element.scrollTop    | 返回类型为Number，表示该元素纵向滚动条距离                   |

# HTMLElement

| 语法                     | 含义                                                         |
| ------------------------ | ------------------------------------------------------------ |
| HTMLElement.offsetParent | 返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 table,td,th,body元素。 |
| HTMLElement.offsetTop    | 它返回当前元素相对于其offsetParent元素的顶部之间的距离  ie>=5.5 |
| HTMLElement.offsetHeight | 它返回该元素的像素高度，高度包含该元素的上下padding+自身高度height+上下边框border，且是一个整数。 ie >= 5.5 |
| HTMLElement.offsetWidth  | 它返回该元素的像素宽度，高度包含该元素的左右padding+自身宽度width+左右边框border，且是一个整数。 ie >= 5.5 |
| HTMLElement.offsetLeft    | 它返回当前元素相对于其offsetParent元素的左边之间的距离  ie>=5.5 |

> 当offsetParent属性设置为fixed返回Null，或者元素display设置none时返回null;或者元素是<body>,<html>也是null

<img  data-src="/assets/content/offset.client/Snipaste_2021-11-09_21-31-28.png" alt="window"  />