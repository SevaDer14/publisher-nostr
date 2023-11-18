import Json from '../../src/components/Json.svelte';

describe('Json', () => {
	const props = {
		message: 'Unsupported tag format',
		tag: {
			some: 'invalid',
			random: 'object'
		}
	};

	it('should mount', () => {
		cy.mount(Json, { props });

		cy.get("[data-cy='json']").should('exist');
	});

	it('should hide tag data by default', () => {
		cy.mount(Json, { props });

		cy.get('[data-cy="json-message"]').should('contain', props.message);
		cy.get('[data-cy="json-button"]').should('exist');
		cy.get('[data-cy="json-content"]').should('not.exist');
	});

	it('should toggle data visibility', () => {
		cy.mount(Json, { props });

		cy.get('[data-cy="json-button"]').click();
		cy.get('[data-cy="json-content"]').should('exist');

		cy.get('[data-cy="json-button"]').click();
		cy.get('[data-cy="json-content"]').should('not.exist');
	});
});
