<script lang="ts">
	import type { RequestState } from '$lib/types';
	import Button from './Button.svelte';

	export let request: RequestState;
	export let label: string | undefined = undefined;
</script>

<Button dataCy="button-request" disabled={request.state === 'loading'}>
	{#if request.state === 'loading'}
		<span data-cy="button-request-loading">loading</span>
	{:else}
		<span data-cy="button-request-label">{label}</span>
		<slot />
	{/if}
</Button>

<style lang="postcss">
</style>
