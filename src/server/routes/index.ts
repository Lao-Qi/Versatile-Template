import { RoutesType } from '../types/router';
import { UserController } from './user';
import { HomeController } from './home';

const routes: RoutesType = [
	{
		path: '/',
		controller: HomeController,
	},
	{
		path: '/api',
		childrens: [
			{
				path: '/user',
				controller: UserController,
			},
		],
	},
];

export { routes };
