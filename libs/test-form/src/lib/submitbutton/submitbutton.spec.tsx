import React from 'react';
import { render } from '@testing-library/react';

import Submitbutton from './submitbutton';

describe('Submitbutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Submitbutton />);
    expect(baseElement).toBeTruthy();
  });
});
