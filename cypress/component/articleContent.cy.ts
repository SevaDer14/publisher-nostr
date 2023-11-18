import type { HtmlTag } from '$lib';
import ArticleContent from '../../src/components/ArticleContent.svelte';

describe('ArticleContent', () => {
	const props = {
		tags: [
			{
				type: 'p' as const,
				innerText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			},
			{
				type: 'paid' as const,
				role: 'p',
				length: 231,
				price: 5000
			},
			{
				type: 'unsupported' as const
			},
			{
				type: 'p' as const,
				innerText:
					'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				type: 'paid' as const,
				role: 'p',
				length: 100,
				price: 200
			},
			{
				type: 'p' as const,
				innerText:
					'In architecto repellat ad architecto culpa et voluptates earum ea repudiandae voluptas rem amet assumenda aut autem dicta 33 similique obcaecati?'
			},
			{
				type: 'p' as const,
				innerText:
					'Et architecto quibusdam et aliquam nisi non ipsa esse vel consequatur porro et sapiente numquam quo vitae modi et dicta ipsa.'
			}
		] as HtmlTag[]
	};

	it('should mount', () => {
		cy.mount(ArticleContent, { props });

		cy.get("[data-cy='article-content']").should('exist');
	});

	it('should have correct data', () => {
		cy.mount(ArticleContent, { props });

		cy.get("[data-cy='paragraph']").should('have.length', 4);
		cy.get("[data-cy='paid-tag']").should('have.length', 2);
		cy.get("[data-cy='json']").should('have.length', 1);
	});
});
