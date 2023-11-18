<script lang="ts">
	import { type PaidTag, satsToString } from '../lib';

	export let tag: PaidTag;
</script>

<div data-cy="paid-tag" class="font-mono mt-[-14px]">
	<p data-cy="paid-tag-price" class="text-[10px] text-amber-500">
		{satsToString(tag.price)}
	</p>
	<p data-cy="paid-tag-content ">
		<mark class="bg-amber-300 text-transparent opacity-20 break-words">
			{'_'.repeat(tag.length)}
		</mark>
	</p>
</div>

<style lang="postcss">
</style>
