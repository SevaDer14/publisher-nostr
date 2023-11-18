<script>
	import TopNavigation from '$components/TopNavigation.svelte';
	import '../app.css';
</script>

<TopNavigation />
<div class="mx-auto max-w-3xl border-zinc-200">
	<slot />
</div>
