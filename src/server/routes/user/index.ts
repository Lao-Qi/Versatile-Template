import { Get, UseBefore, QueryParam } from 'routing-controllers';
import { UserService } from './service';

export class UserController {
	constructor(private readonly userService: UserService) {
		// 你还需要手动的实例你要加载的服务
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
