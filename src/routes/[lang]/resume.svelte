<script>
	import { send, receive } from '@src/libs/crossfade';
	import Main from '@components/main.svelte';
</script>

<Main>
	<h1 out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>Resume</h1>
	<p>Resume</p>
</Main>
