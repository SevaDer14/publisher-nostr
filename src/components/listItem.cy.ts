import ListItem from './ListItem.svelte';

describe('ListItem', () => {
	const props = {
		type: 'article',
		author: 'Publisher Team',
		title: 'Publish stuff and stack sats',
		tags: ['bitcoin', 'monetization'],
		price: 3200
	};

	it('should mount', () => {
		cy.mount(ListItem, { props });
		cy.get("[data-cy='list-item']").should('exist');
	});

	it('should show all content', () => {
		cy.mount(ListItem, { props });
		cy.get("[data-cy='list-item-description']").should('contain', props.type);
		cy.get("[data-cy='list-item-description']").should('contain', props.author);
		cy.get("[data-cy='list-item-title']").should('contain', props.title);

		props.tags.forEach((tag) => {
			cy.get("[data-cy='list-item-tags']").should('contain', tag);
		});

		cy.get("[data-cy='list-item-price']").should('contain', '3.2 kSats');
	});

	it('should show price in BTC', () => {
		cy.mount(ListItem, { props: { ...props, price: 320000000 } });
		cy.get("[data-cy='list-item-price']").should('contain', '3.2 BTC');
	});

	it('should show price in mBTC', () => {
		cy.mount(ListItem, { props: { ...props, price: 320000 } });
		cy.get("[data-cy='list-item-price']").should('contain', '3.2 mBTC');
	});

	it('should show price in sats', () => {
		cy.mount(ListItem, { props: { ...props, price: 300 } });
		cy.get("[data-cy='list-item-price']").should('contain', '300 sats');
	});
});
