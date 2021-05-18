import React from 'react';
// eslint-disable-next-line no-unused-vars
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
