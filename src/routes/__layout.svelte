<script context="module">
	import { t, locale, locales, loadTranslations } from '../libs/translations/index';

	export const load = async ({ stuff, url }) => {
		const { pathname } = url;

		const locale = 'en'; // get from cookie or user session...
		await loadTranslations(locale, pathname);

		return {
			stuff: {
				locale
			}
		};
	};
</script>

<slot />

<style>
</style>
