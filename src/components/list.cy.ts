import List from './List.svelte';

describe('List', () => {
	const props = {
		items: [
			{
				type: 'article',
				author: 'Publisher Team',
				title: 'Publish stuff and stack sats',
				tags: ['bitcoin', 'monetization'],
				price: 3200
			},
			{
				type: 'post',
				author: 'New Tonality',
				title: 'Tuning theory for inharmonic timbres',
				tags: ['music', 'tuning theory'],
				price: 800
			},
			{
				type: 'book',
				author: 'Code Master',
				title: 'Actor model for Nostr development',
				tags: ['programming', 'nostr', 'actor model'],
				price: 125000
			},
			{
				type: 'post',
				author: 'Patrick',
				title: 'Got sats?',
				tags: ['bitcoin'],
				price: 0
			}
		]
	};

	it('should mount', () => {
		cy.mount(List, { props });
		cy.get("[data-cy='list']").should('exist');
	});

	it('should show all items', () => {
		cy.mount(List, { props });
		cy.get("[data-cy='list-item']").should('have.length', 4);
	});
});
