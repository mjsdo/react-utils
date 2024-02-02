import React from 'react';

import { Pagination } from './Pagination';

describe('양 끝 페이지 바깥으로 이동하려는 경우', () => {
  it('첫번째 페이지에서 `previous`를 클릭할 때 `onPageChange`는 호출되지 않는다.', () => {
    const onPageChange = cy.spy().as('onPageChange');

    cy.mount(
      <Pagination
        page={1}
        totalPageCount={10}
        siblingCount={1}
        boundaryCount={1}
        onPageChange={onPageChange}
      />
    );

    cy.findByText('<').as('previous').should('be.exist');
    cy.get('@previous').click();
    cy.get('@onPageChange').should('not.be.called');
  });

  it('마지막 페이지에서 `next`를 클릭할 때 `onPageChange`는 호출되지 않는다.', () => {
    const onPageChange = cy.spy().as('onPageChange');

    cy.mount(
      <Pagination
        page={10}
        totalPageCount={10}
        siblingCount={1}
        boundaryCount={1}
        onPageChange={onPageChange}
      />
    );

    cy.findByText('>').as('next').should('be.exist');
    cy.get('@next').click();
    cy.get('@onPageChange').should('not.be.called');
  });
});

describe('현재 페이지에서 `truncStep`만큼 떨어진 페이지가 페이지 범위를 벗어나는 경우', () => {
  const totalPageCount = 10;
  beforeEach(() => {
    const onPageChange = cy.spy().as('onPageChange');
    cy.mount(
      <Pagination
        page={5}
        truncStep={100}
        totalPageCount={totalPageCount}
        siblingCount={1}
        boundaryCount={1}
        onPageChange={onPageChange}
      />
    );
  });

  it('왼쪽 Trunc를 누를 때 범위를 벗어날 경우 페이지 1로 이동', () => {
    cy.get('.pagination-item__trunc--left').as('leftTrunc').should('be.exist');
    cy.get('@leftTrunc').click();
    cy.get('@onPageChange').should('be.calledWith', 1);
  });

  it('오른쪽 Trunc를 누를 때 범위를 벗어날 경우 마지막 페이지로 이동', () => {
    cy.get('.pagination-item__trunc--right')
      .as('rightTrunc')
      .should('be.exist');
    cy.get('@rightTrunc').click();
    cy.get('@onPageChange').should('be.calledWith', totalPageCount);
  });
});
