import React from 'react';

import { Count } from './count';

describe('<Count />', () => {
  it('renders', () => {
    cy.mount(<Count initialValue={3} />);

    cy.get('3').should('not.be.exist');
  });
});
