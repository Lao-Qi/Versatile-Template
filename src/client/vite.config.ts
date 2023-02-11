import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	root: './',
	publicDir: '../../public',
	assetsInclude: ['./assets/**/*'],
	plugins: [react()],
	server: {
		host: true,
	},
	build: {
		outDir: '../../dist/client',
		assetsDir: './assets',
		emptyOutDir: true,
	},
});
