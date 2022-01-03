<script>
	import { send, receive } from '@libs/crossfade';
	import { fade } from 'svelte/transition';
</script>

<main transition:fade={{ duration: 300 }}>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<p out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>About</p>
	<p out:send={{ key: 'blog' }} in:receive={{ key: 'blog' }}>Blog</p>
</main>
