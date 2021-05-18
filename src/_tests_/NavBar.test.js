import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('<Navbar />', () => {
  let component;

  beforeEach(() => {
    component = render(<MemoryRouter><Navbar /></MemoryRouter>);
  });

  test('It should render', () => {
    component.getByText('stock');
  });

  test('There should be a Company button', () => {
    component.getByText('Company');
  });

  test('There should be a Forex button', () => {
    component.getByText('Forex');
  });
});