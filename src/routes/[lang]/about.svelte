<script>
	import { send, receive } from '@src/libs/crossfade';
	import { fade } from 'svelte/transition';
</script>

<main transition:fade={{ duration: 300 }}>
	<h1 out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>About</h1>
	<p>Some stuff about stuff</p>
</main>
