<script lang="ts">
	import type { ParagraphTag } from "$lib";

    export let tag: ParagraphTag
</script>

<p data-cy="paragraph" class="font-mono break-words hyphens-auto">{tag.innerText}</p>

<style lang="postcss">
</style>
