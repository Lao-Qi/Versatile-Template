<p align="center">
<a href="https://react.docschina.org/" target="blank">
  <img src="https://www.runoob.com/wp-content/uploads/2016/02/react.png" width="200" alt="React Icon">
</a>
<a href="https://www.vitejs.net/" target="blank">
  <img src="https://www.vitejs.net/logo.svg" width="200" alt="Vite Icon">
</a>
<a href="https://expressjs.com/" target="blank">
  <img src="/public/express.svg" width="200" alt="Vite Icon">
</a>
<a href="https://qwik.builder.io/" target="blank">
  <img src="/public/qwik.svg" width="200" alt="Vite Icon">
</a>
</p>

  <p align="center">This is a project template built on the basis of React, Vite, Express, and Qwik</p>
<p align="center">
    <a href="/README_ZH_CN.md">中文文档(Chinese document)</a>
  </p>

## Description

This template covers: `"Single-page app"` and `"Server Render app"`，The server uses Express，And implemented a Nest.js like decorator feature for Express's routing controller, only implementing property decorators.

The three services are compressed by Vite when packaging, and you can freely eliminate a service, for example, if you only want to develop a "server rendering application", you can delete the client folder directly, delete the corresponding dependencies in the package.json file, and then delete the corresponding routes from the server.

This template allows you to quickly start developing a front-end separation application, an SSR rendering application, and a combination of the two, just like SSR rendering on the homepage of the web page, and other routing applications such as front-end and back-end separation.

## Install

> node 16+

```sh
# install
yarn
pnpm i
npm i
```

## Scripts

I didn't exclude the dist folder in the `.gitignore` file, you can add it manually. The idea is that `server:dev` requires `server:build` before starting to use it. Otherwise, `nodemon` will report that the file cannot be found, although the `vite build` execution is complete.

```bash
# build project
$ yarn build

# project client watch mode
$ yarn client:dev

# build project client
$ yarn client:build

# ssr watch mod
$ yarn ssr:dev

# build project ssr
$ yarn ssr:build

# project server watch mode
$ yarn server:dev

# build project server
$ yarn server:build

# start project server
$ yarn server:start

# start dist/sever/main.mjs
$ yarn server:deploy

# format project all code
$ yarn format

# generate project package file to build end project
$ yarn gp
```

## package file

```json
	"build": {
		// entry file from dist
		"main": "./server/main.mjs",
	}
```

## License

[MIT licensed](LICENSE).
