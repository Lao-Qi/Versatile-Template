import { expressAdapter } from '@builder.io/qwik-city/adapters/express/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../ssr/vite.config';

export default extendConfig(baseConfig, () => {
	return {
		root: './src/ssr',
		esbuild: {
			banner: `(() => {
				global.__filename = import.meta.url.replace('file:///', '');
				let ___demo___ = __filename.split('/')
				___demo___.pop();
				global.__dirname = ___demo___.join('/')
			})();`,
		},
		build: {
			ssr: true,
			rollupOptions: {
				input: ['./src/server/main.ts', '@qwik-city-plan'],
			},
			watch: process.env.DEV_ENV ? {} : null,
			outDir: '../../dist/server',
		},
		plugins: [expressAdapter()],
	};
});
