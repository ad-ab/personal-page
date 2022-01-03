<script>
	import { send, receive } from '@libs/crossfade';
	import { fade } from 'svelte/transition';
	import About from './ [lang]/about.svelte';
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

<style>
	a,
	a:visited {
		text-decoration: none;
	}

	.box {
		width: 50%;
		height: 50%;
		border: 1px solid black;
		position: fixed;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box:hover {
		cursor: pointer;
	}

	.top-left {
		background-color: pink;

		top: 0;
		left: 0;
	}

	.top-right {
		background-color: blue;

		top: 0;
		left: 50%;
	}

	.bottom-left {
		background-color: green;
		top: 50%;
		left: 0;
	}

	.bottom-right {
		background-color: yellow;
		top: 50%;
		left: 50%;
	}
</style>
