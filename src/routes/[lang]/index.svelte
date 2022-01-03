<script>
	import { send, receive } from '@libs/crossfade';
	import { fade } from 'svelte/transition';
</script>

<main transition:fade={{ duration: 300 }}>
	<div class="grid">
		<a href="about">
			<div class="box top-left">
				<h1 class="link" out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>About</h1>
			</div>
		</a>
		<a href="cs/about">
			<div class="box top-right">
				<div out:send={{ key: 'blog' }} in:receive={{ key: 'blog' }}>Projects</div>
			</div>
		</a>
		<div class="box bottom-left">
			<div out:send={{ key: 'contect' }} in:receive={{ key: 'contact' }}>Contact</div>
		</div>
		<div class="box bottom-right">
			<div out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>Resume</div>
		</div>
	</div>
	<p>Blog</p>
</main>
