import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
	return {
		root: './src/ssr',
		publicDir: '../../public',
		plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
		preview: {
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
		server: {
			host: true,
		},
		build: {
			outDir: '../../dist/ssr',
			emptyOutDir: true,
		},
	};
});
