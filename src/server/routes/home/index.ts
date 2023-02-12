import { readFileSync } from 'fs';
import { join } from 'path';
import { Controller, Get, ContentType } from 'routing-controllers';

@Controller()
export class HomeController {
	@Get('/')
	main() {
		return readFileSync(join(global.__dirname, '../client/index.html'), 'utf-8');
	}

	@Get('/favicon.ico')
	@ContentType('image/x-icon')
	icon() {
		return readFileSync(join(global.__dirname, '../client/favicon.ico'), 'utf-8');
	}
}
