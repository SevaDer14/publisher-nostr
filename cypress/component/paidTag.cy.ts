import PaidTag from '../../src/components/PaidTag.svelte';

describe('PaidTag', () => {
	const props = {
		tag: {
			type: 'paid' as const,
			role: 'p',
			length: 400,
			price: 5000
		}
	};

	it('should mount', () => {
		cy.mount(PaidTag, { props });

		cy.get("[data-cy='paid-tag']").should('exist');
	});

	it('should show price', () => {
		cy.mount(PaidTag, { props });

		cy.get('[data-cy="paid-tag-price"]').should('contain', '5');
		cy.get('[data-cy="paid-tag-price"]').should('contain', 'kSats');
	});
});
