import ButtonRequest from '../../src/components/ButtonRequest.svelte';

describe('ButtonRequest', () => {
	it('should mount', () => {
		cy.mount(ButtonRequest, { props: { label: 'label', request: { state: 'init' } } });
		cy.get("[data-cy='button-request']").should('exist');
	});

	it('should have correct init state', () => {
		cy.mount(ButtonRequest, { props: { label: 'label', request: { state: 'init' } } });
		cy.get("[data-cy='button-request-label']").should('be.visible');
		cy.get("[data-cy='button-request-loading']").should('not.exist');

		cy.get("[data-cy='button-request']").should('not.be.disabled');
	});

	it('should have correct success state', () => {
		cy.mount(ButtonRequest, {
			props: { label: 'label', request: { state: 'success', data: 'test data' } }
		});
		cy.get("[data-cy='button-request-label']").should('be.visible');
		cy.get("[data-cy='button-request-loading']").should('not.exist');

		cy.get("[data-cy='button-request']").should('not.be.disabled');
	});

	it('should have correct error state', () => {
		cy.mount(ButtonRequest, {
			props: { label: 'label', request: { state: 'error', message: 'error message' } }
		});
		cy.get("[data-cy='button-request-label']").should('be.visible');
		cy.get("[data-cy='button-request-loading']").should('not.exist');

		cy.get("[data-cy='button-request']").should('not.be.disabled');
	});

	it('should have correct loading state', () => {
		cy.mount(ButtonRequest, { props: { label: 'label', request: { state: 'loading' } } });
		cy.get("[data-cy='button-request-label']").should('not.exist');
		cy.get("[data-cy='button-request-loading']").should('be.visible');

		cy.get("[data-cy='button-request']").should('be.disabled');
	});
});
