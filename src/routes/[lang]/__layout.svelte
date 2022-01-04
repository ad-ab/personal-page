<script context="module">
	// TODO
	export async function load({ params }) {
		return {
			stuff: {
				lang: params?.lang
			}
		};
	}
</script>

<slot />

<style>
</style>
