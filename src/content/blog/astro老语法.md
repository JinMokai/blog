---
title: "astro老语法"
pubDate: "2023-12-21"
updateDate: ""
description: "之前关于astro刚出的语法学习，仅供参考！"
author: "ch_kai"
image:
    url: "/assets/OIP-C.png"
    alt: "astro grammar is good!"
tags: ["astro"]
draft: false
---

# astro语法🚀

+ [官网](https://astro.build/)

# bug🐛

+ slot插槽bug，具名插槽失败！
  + 解决方案：版本问题，开始是0.17。后面要安装0.18才能用！


# 集合 API

集合是`src/pages`目录中以美元符号 ( `$`)开头并`createCollection`在组件脚本中包含导出函数的任何文件。

查看我们的[Astro Collections](https://docs.astro.build/core-concepts/collections)指南以获取更多信息和示例。

## `createCollection()`

```jsx
---
export async function createCollection() {
  return { /* ... */ };
}
---
<!-- Your HTML template here. -->
```

⚠️ 该`createCollection()`函数在页面加载之前在其自己的隔离范围内执行。因此，除了文件导入之外，您不能从其父作用域中引用任何内容。如果您违反此要求，编译器将发出警告。

该`createCollection()`函数应返回以下形状的对象：

| 名称       | 类型                                                         | 描述                                                         |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `route`    | `string`                                                     | **必需的。**用于匹配 URL 请求的路由模式。这用于在最终构建中生成页面 URL。它必须以文件名开头：例如，`pages/$tags.astro`必须返回`route`以`/tags/`. |
| `paths`    | `{params: Params}[]`                                         | 返回要生成的所有 URL 的数组。                                |
| `props`    | `async ({ params, paginate }) => object`                     | **必需的。**加载将作为道具传递给页面组件的页面数据。         |
| `paginate` | `boolean`                                                    | 可选：启用自动分页。见下一节。                               |
| `rss`      | [RSS](https://docs.astro.build/reference/api-reference#rss-feed) | 可选：从此集合生成 RSS 2.0 提要 ( [docs](https://docs.astro.build/reference/api-reference#rss-feed) ) |

# 命令行参考

+ 在package里面会出现一个scripts

![image-20210729143310603](/assets/content/astro/code.png)

+ npm run start 默认打开端口3000
+ npm run build 构建用于生成的站点！

## 全局标志

### `--config path`

指定配置文件的路径。默认为`astro.config.mjs`. 如果您为配置文件使用不同的名称或将配置文件放在另一个文件夹中，请使用此选项。

```shell
astro --config config/astro.config.mjs dev
```

### `--project-root path`

指定项目根目录的路径。如果未指定，则假定当前工作目录是根目录。

根用于查找 Astro 配置文件。

```shell
astro --project-root examples/snowpack dev
```

### `--reload`

清除缓存（依赖项在 Astro 应用程序中构建）。

### `--verbose`

启用详细日志记录，这在调试问题时很有帮助。

### `--silent`

启用静默日志记录，这在您不想看到 Astro 日志时很有帮助。

### `--version`

打印 Astro 版本号并退出。

### `--help`

打印帮助信息并退出。

# 配置参考


要配置 Astro，请`astro.config.mjs`在项目的根目录中添加一个文件。所有设置都是可选的。以下是默认值：

```js
export default {
  projectRoot: '.', // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  src: './src', // Path to Astro components, pages, and data
  pages: './src/pages', // Path to Astro/Markdown pages
  dist: './dist', // When running `astro build`, path to final static output
  public: './public', // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    // site: '',            // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    port: 3000, // The port to run the dev server on.
    // tailwindConfig: '',  // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
  },
  // component renderers which are enabled by default
  renderers: [
    '@astrojs/renderer-svelte',
    '@astrojs/renderer-vue',
    '@astrojs/renderer-react',
    '@astrojs/renderer-preact',
  ],
};
```

# || && 语法介绍

```js
---
 let a = true
 let b = false
---

{a || '#a'} <br />
{b || '#b'} <br />
{a && 'aa'} <br />
{b && 'bb'} <br />
     
|| 符号  如果前者参数为false 就会显示后者数据,前者为true显示前者
&& 符号  如果前者参数为true  就会显示后者数据,前者为false就隐藏
```

