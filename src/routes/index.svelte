<script>
	import { send, receive } from '@libs/crossfade';
	import { t } from '@libs/translations';

	import Main from '@components/main.svelte';
	import Link from '@components/link.svelte';
</script>

<Main>
	<div class="grid">
		<Link href="cs/about">
			<div class="box top-left">
				<h1 class="link" out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>
					{$t('menu.about')}
				</h1>
			</div>
		</Link>
		<Link href="cs/blog">
			<div class="box top-right">
				<div out:send={{ key: 'blog' }} in:receive={{ key: 'blog' }}>{$t('menu.projects')}</div>
			</div>
		</Link>
		<Link href="cs/contact">
			<div class="box bottom-left">
				<div out:send={{ key: 'contect' }} in:receive={{ key: 'contact' }}>
					{$t('menu.contact')}
				</div>
			</div>
		</Link>
		<Link href="cs/resume">
			<div class="box bottom-right">
				<div out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>
					{$t('menu.resume')}
				</div>
			</div>
		</Link>
	</div>
</Main>

<style>
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
