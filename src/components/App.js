import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
