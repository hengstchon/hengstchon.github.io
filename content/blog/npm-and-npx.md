---
title: "npm 与 npx 区别"
date: "2019-07-03"
---

### npm 与 npx 区别

npm 可以 local 或 global 安装一个包，local 时可执行文件在 `./node_modules/.bin/` 文件夹中，global 时可执行文件在 `/usr/local/bin` 中。但是如果 local 安装，我们并不能直接使用这个包，因为全局 path 中并没有它的可执行文件。在 npx 出现前，可以通过 `./node_modules/.bin/some-package` 或将 `"some-package": "some-package"` 写到 `packages.json` 的 `"scripts"` 中，然后 `npm run some-package` 来执行。而 npx 的出现恰好解决了这个问题。

根据 [npx 官网](https://www.npmjs.com/package/npx)描述，npx 会先检查 `$PATH`，没有再检查 local `node_modules/.bin`，再没有就临时安装再执行命令，不会污染全局环境。

npx 适用场景：

- Running a project-local bin

- One-off invocation without local installation

- Invoking a gist script or a command from a github repository or

- Specify a different version of an npm module

因为一般在一个 project 中，`create-react-app` 这个包只会在创建工程时使用一次，所以现在我们知道为什么在官网中推荐用 `npx create-react-app my-app` 来创建而不是其他方式了。
