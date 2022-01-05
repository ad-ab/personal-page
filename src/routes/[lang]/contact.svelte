<script>
	import { send, receive } from '@src/libs/crossfade';
	import Main from '@components/main.svelte';
</script>

<Main>
	<h1 out:send={{ key: 'contact' }} in:receive={{ key: 'contact' }}>Contact</h1>
	<p>Some stuff about stuff</p>
</Main>
