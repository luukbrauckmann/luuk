import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import graphql from '@rollup/plugin-graphql';

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare(),
	image: {
		// cloudflare is not supported by the Astro image service
		// @see https://docs.astro.build/en/guides/images/#configure-no-op-passthrough-service
		service: passthroughImageService()
	},
	vite: {
		plugins: [graphql()]
	},
	devToolbar: {
		enabled: false
	}
});
