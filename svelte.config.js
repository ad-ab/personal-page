import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
            resolve: {
                alias: {
                    // these are the aliases and paths to them
					'@src': path.resolve('./src'),
					'@components': path.resolve('./src/components'),
					'@libs': path.resolve('./src/libs'),
                }
            }
        }
	}
};

export default config;
