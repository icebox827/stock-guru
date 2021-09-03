import { useState } from 'react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex, MenuItem, Menu, Text, Box, 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Flex classNameName="Navbar" backgroundColor="teal" h="3rem">
      <Box>
        <Link to="/" className="nav-link">
          <Text fontSize="2xl" color="white">
            Stock Guru
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/" className="nav-link active">
          <Text fontSize="2xl" color="white">
            Home 
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/stock">
          <Text fontSize="2xl" color="white">
            Stock
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/company">
          <Text fontSize="2xl" color="white">
            Company
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/forex">
          <Text fontSize="2xl" color="white">
            Forex
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/crypto">
          <Text fontSize="2xl" color="white">
            Crypto
          </Text>
        </Link>
      </Box> 
    </Flex>
  );
}

export default NavBar;
