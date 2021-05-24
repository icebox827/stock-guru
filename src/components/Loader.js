import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

function Loader() {
  return (
    <Center>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="brown.500" size="xl" />
    </Center>
  )
}

export default Loader;