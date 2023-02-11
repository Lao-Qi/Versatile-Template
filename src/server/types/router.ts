export type RouteType = {
	/** 路径 */
	path?: string;
	/** 路由控制器 */
	controller?: any;
	/** 子路由 */
	childrens?: RoutesType;
};

export type RoutesType = RouteType[];
