import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from '../containers/NavBar';

describe('<NavBar />', () => {
  let component;

  beforeEach(() => {
    component = render(<MemoryRouter><NavBar /></MemoryRouter>);
  });

  test('There should be a Home button', () => {
    component.getByText('Stock');
  });

  test('There should be a Categories button', () => {
    component.getByText('Company');
  });

  test('There should be a Countries button', () => {
    component.getByText('Forex');
  });
});