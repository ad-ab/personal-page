<script>
	import { send, receive } from '@src/libs/crossfade';
	import { fade } from 'svelte/transition';
</script>

<main transition:fade={{ duration: 300 }}>
	<h1 out:send={{ key: 'blog' }} in:receive={{ key: 'blog' }}>Blog</h1>
	<p>Blog article here tralalala</p>
</main>
