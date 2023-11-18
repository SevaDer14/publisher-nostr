import ArticleHeader from './ArticleHeader.svelte';

describe('ArticleHeader', () => {
	const props = {
		title: 'Tuning theory for inharmonic timbres',
		type: 'article',
		author: 'New Tonality',
		tags: ['music', 'tuning theory']
	};

	it('should mount', () => {
		cy.mount(ArticleHeader, { props });

		cy.get("[data-cy='article-header']").should('exist');
	});

	it('should have correct data', () => {
		cy.mount(ArticleHeader, { props });

		cy.get("[data-cy='article-header-title']").should('contain', props.title);
		cy.get("[data-cy='article-header-type-and-author']").should('contain', props.type);
		cy.get("[data-cy='article-header-type-and-author']").should('contain', props.author);
		props.tags.forEach((tag) => {
			cy.get("[data-cy='article-header-tags']").should('contain', tag);
		});
	});
});
