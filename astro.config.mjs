// @ts-check
import { defineConfig } from 'astro/config';

const showAstroDevToolbar = false;

// https://astro.build/config
export default defineConfig({
	site: 'https://rbernhardtpersonal.github.io',
	base: process.env.GITHUB_ACTIONS ? '/robe-solutions' : undefined,
	devToolbar: {
		enabled: showAstroDevToolbar,
	},
});
