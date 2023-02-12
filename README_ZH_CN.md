<p align="center">
<a href="https://react.docschina.org/" target="blank">
  <img src="https://www.runoob.com/wp-content/uploads/2016/02/react.png" width="200" alt="React Icon">
</a>
<a href="https://www.vitejs.net/" target="blank">
  <img src="https://www.vitejs.net/logo.svg" width="200" alt="Vite Icon">
</a>
<a href="https://www.vitejs.net/" target="blank">
  <img src="/public/express.svg" width="200" alt="Vite Icon">
</a>
<a href="https://www.vitejs.net/" target="blank">
  <img src="/public/qwik.svg" width="200" alt="Vite Icon">
</a>
</p>

  <p align="center">这是一个基于 React、Vite、Express 和 Qwik 构建的项目模板。</p>
<p align="center">
    <a href="/README_ZH_CN.md">English document(英文文档)</a>
  </p>

# 介绍

这个模板涵盖了：“单页应用”和“服务器渲染应用”，服务器使用 Express，并引入了`routing-controllers`实现像 Nest.js 的装饰器功能。

三种服务在打包的时候都有经过 Vite 的压缩，并且可以很自由的把某服务进行剔除，比如只想开发“服务器渲染应用”可以把 client 文件夹直接删除，并在 package.json 文件中删除对应的依赖，再从 server 中删除对应的路由即可。

这个模板可以让你很快的开始开发一个前后端分离应用，SSR 渲染应用，还有二者合并起来的应用，就像网页首页 SSR 渲染，其他路由前后端分离这样的应用。

## 使用

我没有在`.gitignore`文件中排除 dist 文件夹，你可以手动的加上去。用意是`server:dev`需要先`server:build`后再开始使用会比较好。不然`nodemon`会报出找不到文件，虽然`vite build`执行结束后就有了。

```sh
# client
yarn client:dev # 监听
yarn client:build # 打包

# ssr
yarn ssr:dev
yarn ssr:build

# server
yarn server:dev
yarn server:build
yarn server:deploy # 运行打包后的服务器
yarn server:start  # 打包后启动

# 整体代码格式
yarn format

# 为打包后的资源生成package.json文件，方便部署
yarn gb
```

## License

[MIT licensed](LICENSE).
