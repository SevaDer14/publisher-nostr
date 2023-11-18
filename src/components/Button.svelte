<script lang="ts">
	export let disabled: boolean = false;
	export let color: 'zinc' | 'amber' | undefined = undefined;

	const colorClass = (() => {
		switch (color) {
			case 'zinc':
				return 'text-zinc-700 border-zinc-500';
			case 'amber':
				return 'text-amber-700 border-amber-500';
			default:
				return 'text-zinc-700 border-zinc-500';
		}
	})();
</script>

<button
	data-cy={$$props['data-cy']}
	{disabled}
	on:click
	class="flex min-w-[74px] justify-center rounded-full border px-4 py-0.5 font-mono text-xs disabled:opacity-75 {colorClass} {$$props.class}"
>
	<slot />
</button>

<style lang="postcss">
</style>
