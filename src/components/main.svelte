<script>
	import { fade } from 'svelte/transition';

	import { duration } from '@src/constants';
</script>

<main transition:fade={{ duration }}><slot /></main>

<style>
	main {
		width: 100%;
	}
</style>
