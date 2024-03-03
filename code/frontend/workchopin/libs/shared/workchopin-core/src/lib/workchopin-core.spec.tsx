import React from 'react';
import { render } from '@testing-library/react';

import WorkchopinCore from './workchopin-core';

describe('WorkchopinCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkchopinCore />);
    expect(baseElement).toBeTruthy();
  });
});
