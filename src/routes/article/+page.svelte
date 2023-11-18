<script>
	import ArticleContent from '$components/ArticleContent.svelte';
	import ArticleHeader from '$components/ArticleHeader.svelte';
</script>

<div class="h-full max-w-[80ch] bg-white pt-6">
	<ArticleHeader
		title="Tuning theory for inharmonic timbres"
		type="article"
		author="New Tonality"
		tags={['music', 'tuning theory']}
	/>
	<ArticleContent
		tags={[
			{
				type: 'p',
				innerText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			},
			{
				type: 'paid',
				role: 'p',
				length: 231,
				price: 5000
			},
			{
				type: 'unsupported'
			},
			{
				type: 'p',
				innerText:
					'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				type: 'paid',
				role: 'p',
				length: 100,
				price: 200
			},
			{
				type: 'p',
				innerText:
					'In architecto repellat ad architecto culpa et voluptates earum ea repudiandae voluptas rem amet assumenda aut autem dicta 33 similique obcaecati?'
			},
			{
				type: 'p',
				innerText:
					'Et architecto quibusdam et aliquam nisi non ipsa esse vel consequatur porro et sapiente numquam quo vitae modi et dicta ipsa.'
			}
		]}
	/>
</div>
