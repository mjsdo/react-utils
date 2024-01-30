describe('useGetState', () => {
  beforeEach(() => {
    cy.visitStory('libs-react-use-get-state--count-story');

    cy.contains('Count 구독 한 컴포넌트')
      .parent()
      .as('sub')
      .within(() => {
        cy.get(`[data-cy="count"]`).as('subCount').should('have.text', '0');
        cy.get(`[data-cy="render-count"]`)
          .as('subRenderCount')
          .should('have.text', '1');
      });

    cy.contains('Count 구독 안한 컴포넌트')
      .parent()
      .as('noSub')
      .within(() => {
        cy.get(`[data-cy="count"]`).as('noSubCount').should('have.text', '');
        cy.get(`[data-cy="render-count"]`)
          .as('noSubRenderCount')
          .should('have.text', '1');
      });

    cy.findByRole('button', { name: 'Count 1 증가시키기' })
      .as('increaseCountButton')
      .click();
  });

  it('`count`업데이트시, `count`를 구독한 컴포넌트만 리렌더링 된다.', () => {
    cy.get('@subCount').should('have.text', '1');
    cy.get('@subRenderCount').should('have.text', '2');

    cy.get('@noSubCount').should('have.text', '');
    cy.get('@noSubRenderCount').should('have.text', '1');

    cy.get('@increaseCountButton').click();

    cy.get('@subCount').should('have.text', '2');
    cy.get('@subRenderCount').should('have.text', '3');

    cy.get('@noSubCount').should('have.text', '');
    cy.get('@noSubRenderCount').should('have.text', '1');
  });

  it('`count`를 구독하지 않은 컴포넌트에서 현재 `count`값을 참조할 수 있다.', () => {
    cy.findByText('현재 Count 반영하기').as('getCountButton');

    cy.get('@subCount').should('have.text', '1');
    cy.get('@noSubCount').should('have.text', '');
    cy.get('@noSubRenderCount').should('have.text', '1');

    cy.get('@getCountButton').click();
    cy.get('@noSubCount').should('have.text', '1');
    cy.get('@noSubRenderCount').should('have.text', '1');

    cy.get('@increaseCountButton').click();
    cy.get('@increaseCountButton').click();

    cy.get('@subCount').should('have.text', '3');
    cy.get('@noSubCount').should('have.text', '1');
    cy.get('@noSubRenderCount').should('have.text', '1');

    cy.get('@getCountButton').click();
    cy.get('@noSubCount').should('have.text', '3');
    cy.get('@noSubRenderCount').should('have.text', '1');
  });
});
