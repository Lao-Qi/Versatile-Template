import { Controller, Get, UseBefore, QueryParam } from 'routing-controllers';
import { UserService } from './service';

@Controller('/api/user')
export class UserController {
	private readonly userService: UserService;
	constructor() {
		// 你需要手动的实例你要加载的服务
		this.userService = new UserService();
	}

	@Get()
	@UseBefore(async (req, res, next) => {
		console.log(req.path);
		next();
	})
	find(@QueryParam('uid') uid: number) {
		return this.userService.find(uid);
	}
}
