import { defineConfig } from 'cypress';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	component: {
		setupNodeEvents(on, config) {
			return Object.assign({}, config);
		},
		devServer: {
			framework: 'svelte',
			bundler: 'vite',
			viteConfig: () => {
				return {
					plugins: [svelte()]
				}
			}
		},
		specPattern: 'src/**/*.{cy,unit}.{js,jsx,ts,tsx}',
	},
});
