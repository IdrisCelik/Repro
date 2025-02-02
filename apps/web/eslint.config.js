import { svelteConfig } from '@repo/eslint-config/svelte.js';

export default [
	...svelteConfig,
	{
		ignores: ['.svelte-kit/*']
	}
];
