import { RequestHandlers } from '../../types/descriptors';
import { REQUEST_HANDLERS } from '../../types/constants';

/** 创建响应处理装饰器 */
const createRouterHandleDescriptor = function (mod: string) {
	return (path: string = '/') =>
		(target: any, key: string) => {
			// 记录RequestHandlers部分
			const RequestHandlers: RequestHandlers = Reflect.getMetadata(REQUEST_HANDLERS, target) ?? [];
			RequestHandlers.push({ path, mod, key });
			Reflect.defineMetadata(REQUEST_HANDLERS, RequestHandlers, target);
		};
};

// 响应方式部分
export const Get = createRouterHandleDescriptor('get');
export const Post = createRouterHandleDescriptor('post');
export const Delete = createRouterHandleDescriptor('delete');
export const Patch = createRouterHandleDescriptor('patch');
export const All = createRouterHandleDescriptor('all');
export const Put = createRouterHandleDescriptor('put');
export const Options = createRouterHandleDescriptor('options');
export const Head = createRouterHandleDescriptor('head');
