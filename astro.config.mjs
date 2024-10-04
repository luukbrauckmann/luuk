import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import graphql from '@rollup/plugin-graphql';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare({
		imageService: 'passthrough',
		platformProxy: {
			enabled: true
		}
	}),
	vite: {
		plugins: [
			graphql(),
			autoImport({
				imports: [
					{
						'./src/scripts/logger': ['logger']
					}
				],
				dts: './src/auto-imports.d.ts'
			})
		]
	},
	devToolbar: {
		enabled: false
	}
});
