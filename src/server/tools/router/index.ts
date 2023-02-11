import { Router } from 'express';
import type { RoutesType } from '../../types/router';
import type { Request, Response, NextFunction } from 'express';
import { RequestHandlers, RequestMiddlewaresType, FilterType, ExceptionType } from '../../types/descriptors';
import { REQUEST_HANDLERS, REQUEST_MIDDLEWARE, FILTER, EXECPTION } from '../../types/constants';
import { Progress } from '../progress';

/** 解析拼接路由 */
export function getRoutes(routes: RoutesType): Router {
	const router = Router();
	for (const [_, route] of Object.entries(routes)) {
		const path = route.path;
		route.controller && router.use(path, parseController(route.controller, route.path));
		route.childrens?.length && router.use(path, getRoutes(route.childrens));
	}
	return router;
}

/** 解析路由 */
function parseController(Controller: any, usePath: string): Router {
	const router = Router();
	const controller = new Controller();
	const RequestHandlers: RequestHandlers = Reflect.getMetadata(REQUEST_HANDLERS, controller) ?? {};
	for (const [_, { path, key, mod }] of Object.entries(RequestHandlers)) {
		const RequestMiddlewares: RequestMiddlewaresType = Reflect.getMetadata(REQUEST_MIDDLEWARE, controller, key) ?? [];
		for (const [_, RequestMiddleware] of Object.entries(RequestMiddlewares)) {
			router[mod](path, RequestMiddleware);
		}

		Progress.push(`\x1B[34mCreate Route to { Use: ${usePath}, Mod: ${mod.toLocaleUpperCase()}, Path: ${path}, handle: ${key}}\x1b[0m`);

		const filter: FilterType = Reflect.getMetadata(FILTER, controller, key) ?? Reflect.getMetadata(FILTER, Controller);
		const execption: ExceptionType = Reflect.getMetadata(EXECPTION, controller, key) ?? Reflect.getMetadata(EXECPTION, Controller);
		router[mod](path, async (req: Request, res: Response, next: NextFunction) => {
			let result = null;
			try {
				result = await controller[key](req, res, next);
				filter && (result = filter(result, { Req: req, Res: res, Next: next }));
			} catch (err) {
				result = execption ? execption(err, { Req: req, Res: res, Next: next }) : err;
			}
			result && res.send(result);
		});
	}

	return router;
}
