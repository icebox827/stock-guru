/* eslint-disable func-style */
import React from 'react';
// eslint-disable-next-line sort-imports
import { ChakraProvider, chakra } from '@chakra-ui/react';
import Routes from './Routes';

function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
