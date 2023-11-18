<script lang="ts">
	import Button from './Button.svelte';

	export let tag: Object;
	export let message = '';

	let open: boolean = false;
	const toggleOpen = () => (open = !open);
</script>

<div data-cy="json" class="flex flex-col items-center bg-zinc-100 px-6 py-4 font-mono">
	{#if message}
		<p data-cy="json-message" class="font-light">{message}</p>
	{/if}
	<Button data-cy="json-button" class="m-auto my-4 max-w-fit" on:click={toggleOpen}>
		{open ? 'Hide JSON' : 'Show JSON'}
	</Button>

	{#if open}
		<div data-cy="json-content" class="w-full rounded-lg bg-white p-2">
			<p>{JSON.stringify(tag)}</p>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
