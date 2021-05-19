import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Card } from 'react-bootstrap';

describe('Forex component', () => {
  it('Should render Card', () => {
    render(<Card />)
  })
});
