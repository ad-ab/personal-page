<script>
	import { send, receive } from '@src/libs/crossfade';
	import Main from '@components/main.svelte';
	import Content from '@components/content.svelte';
	import Header from '@components/header.svelte';
</script>

<Main>
	<Content>
		<Header>
			<div out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>About</div>
		</Header>
		<p>Some stuff about stuff</p>
	</Content>
</Main>
