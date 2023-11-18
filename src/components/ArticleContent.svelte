<script lang="ts">
	import type { HtmlTag } from '$lib';
	import P from './P.svelte';
	import Json from './Json.svelte';
	import PaidTag from './PaidTag.svelte';

	export let tags: HtmlTag[];
</script>

<div data-cy="article-content" class="px-6 py-4">
	{#each tags as tag}
		{#if tag.type === 'p'}
			<P {tag} />
		{:else if tag.type === 'paid'}
			<PaidTag {tag} />
		{:else}
			<Json message="Unsupported tag type!" {tag} />
		{/if}
        <div class="pb-6" />
	{/each}
</div>

<style lang="postcss">
</style>
