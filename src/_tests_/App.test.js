import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Routes from '../components/Routes';
import store from '../store';

it('Should render the Routes component', () => {
  const wrapper = render(<Provider store={store}><Routes /></Provider>);
  expect(wrapper).toBeTruthy();
});
