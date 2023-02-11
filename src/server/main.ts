import 'reflect-metadata';
import { fileURLToPath } from 'url';
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = join(__filename, '../');
global.__client = join(__dirname, '../client');
global.__ssr = join(__dirname, '../ssr');
import { createQwikCity } from '@builder.io/qwik-city/middleware/node';
import qwikCityPlan from '@qwik-city-plan';
import render from '../ssr/src/entry.ssr';
import express from 'express';
import compression from 'compression';
import { join } from 'path/win32';
import { routes } from './routes';
import { getRoutes } from './tools/router';
import { Progress } from './tools/progress';

const bootstarp = async () => {
	Progress.push('正在初始化服务器...');
	const app = express();
	// 使用中间件压缩
	app.use(compression());
	// 挂载client打包出来的静态资源
	Progress.push('正在托管client静态资源...');
	app.use('/assets', express.static(join(__dirname, '../client/assets')));

	// 挂载ssr打包处理的静态资源
	Progress.push('正在托管ssr静态资源...');
	app.use('/build', express.static(join(__dirname, './build'), { immutable: true, maxAge: '1y' }));
	app.use(express.static(join(__dirname, '../ssr'), { redirect: false }));
	// 生成qwik生成的路由中间件
	Progress.push('正在加载ssr路由...');
	const { router, notFound } = createQwikCity({ render, qwikCityPlan });
	// 挂载qwik的路由中间件
	app.use(router);

	// 服务器本身的api服务
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	Progress.push(`正在加载服务器路由...`);
	app.use(getRoutes(routes));
	app.use(notFound);
	// 将服务器暴露到3000端口
	app.listen(3000, listenout);
};

function listenout() {
	Progress.push(`当前服务器位于 ${process.env.DEV_ENV ? '开发环境中' : '生产环境中 '}`);
	Progress.push('\x1b[4mhttp://127.0.0.1:3000\x1b[0m');
}

bootstarp();
