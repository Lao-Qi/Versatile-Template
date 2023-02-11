import { Get, Middleware } from '../../tools/descriptors';
import { UserService } from './service';
import type { RequestHandler } from 'express';

export class UserController {
	constructor(private readonly userService: UserService) {
		// 你还需要手动的实例你要加载的服务
		this.userService = new UserService();
	}

	@Get()
	@Middleware(async (req, res, next) => {
		console.log(req.path);
		next();
	})
	find: RequestHandler = function (req, res) {
		console.log(this.userService);
		const uid = req.query['uid'];
		return this.userService.find(String(uid));
	};
}
