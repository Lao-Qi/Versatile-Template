import type { Request, Response, NextFunction } from 'express';

export type Content = {
	Req: Request;
	Res: Response;
	Next: NextFunction;
};
export type RequestHandlers = { path: string; mod: string; key: string }[];
export type RequestMiddlewareType = ((req: Request, res: Response, next: NextFunction) => Promise<void>) | ((req: Request, res: Response, next: NextFunction) => void);
export type RequestMiddlewaresType = RequestMiddlewareType[];
export type FilterType = (result: any, content: Content) => any;
export type ExceptionType = (err: any, content: Content) => any;
export type RequestHandler = (req: Request, res: Response, next: NextFunction) => any | Promise<any>;
