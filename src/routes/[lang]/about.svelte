<script>
	import { send, receive } from '@src/libs/crossfade';
	import Main from '@components/main.svelte';
</script>

<Main>
	<div out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>About</div>
	<p>Some stuff about stuff</p>
</Main>
