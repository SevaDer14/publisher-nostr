<script lang="ts">
	import { satsToString } from '../lib';

	export let type: string;
	export let author: string;
	export let title: string;
	export let tags: string[];
	export let price: number;

	const priceString = price === 0 ? '' : satsToString(price);
</script>

<li data-cy="list-item" class="w-full list-none p-4 text-xs">
	<p data-cy="list-item-description" class="text-zinc-500">
		{`${type} by `}
		<span class="font-medium">{author}</span>
	</p>
	<h2 data-cy="list-item-title" class="pb-4 pt-2 text-lg font-medium">{title}</h2>
	<div class="flex items-center justify-between">
		<p data-cy="list-item-tags" class="text-[10px] text-zinc-400">
			{#each tags as tag}
				<span class="pr-3">{tag}</span>
			{/each}
		</p>
		<p data-cy="list-item-price" class="text-amber-500">{priceString}</p>
	</div>
</li>

<style lang="postcss">
</style>
