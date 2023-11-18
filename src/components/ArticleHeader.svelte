<script lang="ts">
	export let title: string;
	export let type: string;
	export let author: string;
	export let tags: string[];
</script>

<header data-cy="article-header" class="py-4 px-6">
	<h1 data-cy="article-header-title" class="text-2xl font-medium py-1">{title}</h1>
	<p data-cy="article-header-type-and-author" class="font-light pt-2 text-sm">
		{`${type} by `}
		<span class="font-medium">{author}</span>
	</p>
	<div data-cy="article-header-tags" class="pt-1 text-[10px] text-zinc-500">
		{#each tags as tag}
			<span class="pr-3">{tag}</span>
		{/each}
	</div>
</header>

<style lang="postcss">
</style>
