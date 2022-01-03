<script context="module">
	import { t, locale, locales, loadTranslations } from '@libs/translations';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ stuff, page }) => {
		const { path } = page;

		const locale = 'en'; // get from cookie or user session...
		await loadTranslations(locale, path);

		return {
			stuff: {
				locale
			}
		};
	};

	// TODO
	/** @type {import('@sveltejs/kit').Load} */
	// export async function load({ page, stuff }) {
	// 	return {
	// 		stuff: {
	// 			lang: page.params.lang
	// 		}
	// 	};
	// }
</script>

<slot />

<style>
</style>
