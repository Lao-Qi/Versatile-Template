import { readFile } from 'fs/promises';
import { join } from 'path';
import { Get } from '../../tools/descriptors';
import type { RequestHandler } from '../../types/descriptors';

/** 叫成Controller也许是更合理一点(原本叫HomeRouter) */
export class HomeController {
	@Get('/')
	main: RequestHandler = async function (req, res) {
		const data = await readFile(join(global.__client, '/index.html'), 'utf-8');
		res.setHeader('content-type', 'text/html');
		res.send(data);
	};

	@Get('/favicon.ico')
	icon: RequestHandler = async function (req, res) {
		const data = await readFile(join(global.__client, './favicon.ico'), 'utf-8');
		res.setHeader('content-type', 'image/x-icon');
		res.send(data);
	};

	@Get('/react.svg')
	react: RequestHandler = async function (req, res) {
		const data = await readFile(join(global.__client, './react.svg'), 'utf-8');
		res.setHeader('content-type', 'image/svg+xml');
		res.send(data);
	};
}
