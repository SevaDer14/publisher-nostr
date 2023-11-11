<script lang="ts">
	import ListItem from './ListItem.svelte';

	export let items: {
		type: string;
		author: string;
		title: string;
		tags: string[];
		price: number;
	}[] = [];
</script>

<ul data-cy="list" class="h-full w-full rounded-lg border border-zinc-200 bg-white overflow-y-auto">
	{#each items as item, index}
		<ListItem {...item} />
		{#if index < items.length - 1}
			<div class="h-[1px] w-full bg-zinc-200" />
		{/if}
	{/each}
</ul>

<style lang="postcss">
</style>
