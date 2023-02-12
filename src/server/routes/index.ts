import { RoutingControllersOptions } from 'routing-controllers';
import { UserController } from './user';
import { HomeController } from './home';

const ControllersConfig: RoutingControllersOptions = {
	classTransformer: true,
	controllers: [HomeController, UserController],
};

export { ControllersConfig };
