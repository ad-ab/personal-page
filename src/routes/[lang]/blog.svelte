<script>
	import { send, receive } from '@src/libs/crossfade';
	import Main from '@components/main.svelte';
</script>

<Main>
	<h1 out:send={{ key: 'blog' }} in:receive={{ key: 'blog' }}>Blog</h1>
	<p>Blog article here tralalala</p>
</Main>
