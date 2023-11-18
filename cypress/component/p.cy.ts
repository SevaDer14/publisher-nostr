import P from '../../src/components/P.svelte';

describe('P', () => {
	const props = {
		tag: {
			type: 'p' as const,
			innerText: 'Paragraph inner text',
		}
	};

	it('should mount', () => {
		cy.mount(P, { props });

		cy.get("[data-cy='paragraph']").should('exist');
	});

	it('should show inner text', () => {
		cy.mount(P, { props });

		cy.get('[data-cy="paragraph"]').should('contain', props.tag.innerText);
	});
});
