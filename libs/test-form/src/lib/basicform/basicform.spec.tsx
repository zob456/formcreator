import React from 'react';
import { render } from '@testing-library/react';

import Basicform from './basicform';

describe('Basicform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Basicform />);
    expect(baseElement).toBeTruthy();
  });
});
