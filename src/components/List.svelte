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

{#if items.length > 0}
	<ul data-cy="list" class="w-full rounded-lg border bg-white">
		{#each items as item, index}
			<ListItem {...item} />
			{#if index < items.length - 1}
				<div class="h-[1px] w-full bg-zinc-200" />
			{/if}
		{/each}
	</ul>
{/if}

<style lang="postcss">
</style>
