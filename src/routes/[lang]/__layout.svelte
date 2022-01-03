<script context="module">
	// TODO
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, stuff }) {
		return {
			stuff: {
				lang: page.params.lang
			}
		};
	}
</script>

<slot />

<style>
</style>
