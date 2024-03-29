import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Card value="0" imageSrc="https://picsum.photos/200/300" />
    );
    expect(baseElement).toBeTruthy();
  });
});
