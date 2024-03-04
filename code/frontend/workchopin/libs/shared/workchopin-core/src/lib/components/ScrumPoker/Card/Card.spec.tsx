import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  // TODO: Resolve issue with loading images to Jest
  it.skip('should render successfully', () => {
    const { baseElement } = render(<Card value="0" imageSrc="0.png" />);
    expect(baseElement).toBeTruthy();
  });
});
