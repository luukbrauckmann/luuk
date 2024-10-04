import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import graphql from '@rollup/plugin-graphql';

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare({
		imageService: 'passthrough',
		platformProxy: {
			enabled: true
		}
	}),
	vite: {
		plugins: [graphql()]
	},
	devToolbar: {
		enabled: false
	}
});
