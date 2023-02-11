import type { RequestMiddlewareType, RequestMiddlewaresType } from '../../types/descriptors';
import { REQUEST_MIDDLEWARE } from '../../types/constants';

export const Middleware = (middleware: RequestMiddlewareType) => {
	return (target: any, key: string) => {
		const RequestMiddlewares: RequestMiddlewaresType = Reflect.getMetadata(REQUEST_MIDDLEWARE, target, key) ?? [];
		RequestMiddlewares.push(middleware);
		Reflect.defineMetadata(REQUEST_MIDDLEWARE, RequestMiddlewares, target, key);
	};
};
