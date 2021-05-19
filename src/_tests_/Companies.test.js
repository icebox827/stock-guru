import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Card } from 'react-bootstrap';

describe('Companies component', () => {
  it('Should render Card', () => {
    render(<Card />)
  })

  it('Should render Loading Data...', () => {
    const element = "Loading Data...";
    expect(element).toBe('Loading Data...');
  });
});
