import { render } from '@testing-library/react';
import React from 'react';
import { it, expect } from 'vitest';

import { Count } from './count';

it('render', () => {
  const screen = render(<Count initialValue={2} />);

  const text = screen.getByText(2);

  expect(text).toBeInTheDocument();
});
