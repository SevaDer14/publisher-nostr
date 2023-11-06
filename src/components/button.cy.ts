import Button from './Button.svelte';

describe('Button', () => {
	it('should mount', () => {
		cy.mount(Button, { props: { label: 'test' } });
	});
});
