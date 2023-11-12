<script>
	import TopNavigation from '$components/TopNavigation.svelte';
	import '../app.css';
</script>

<TopNavigation />
<div class="p-4 border-zinc-200 max-w-3xl mx-auto">
	<slot />
</div>
