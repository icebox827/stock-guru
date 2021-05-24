import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Container, Jumbotron } from 'react-bootstrap';

describe('stockDetails component', () => {
  it('Should render jumbotron', () => {
    render(<Jumbotron />);
  });

  it('Should render a container', () => {
    render(<Container />);
  });
});