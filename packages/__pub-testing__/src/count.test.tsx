import { render } from '@testing-library/react';
import React from 'react';

import { Count } from './count';

it('render', () => {
  const screen = render(<Count initialValue={1} />);

  const text = screen.getByText(1);

  expect(text).toBeInTheDocument();
});
