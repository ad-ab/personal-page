<script>
	import { send, receive } from '@src/libs/crossfade';
	import { fade } from 'svelte/transition';
</script>

<main transition:fade={{ duration: 300 }}>
	<h1 out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>Resume</h1>
	<p>Resume</p>
</main>
