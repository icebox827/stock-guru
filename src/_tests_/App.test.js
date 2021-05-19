import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Routes from '../components/Routes';

describe('The APP component', () => {
  it('Should render the app component', () => {
    render(<Routes />)
    expect(<Routes />).toBe(true)
  });
});