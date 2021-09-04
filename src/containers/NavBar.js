import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex, MenuItem, Menu, Text, Box, Spacer, Divider
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Flex classNameName="Navbar" backgroundColor="teal" h="3rem">
      <Box>
        <Link to="/">
          <Text fontSize="2xl" color="yellow.500" className="nav-link">
            Stock Guru
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <Text fontSize="2xl" color="white" className="nav-link">
            Home 
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/stock">
          <Text fontSize="2xl" color="white" className="nav-link">
            Stock
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/company" >
          <Text fontSize="2xl" color="white" className="nav-link">
            Company
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/forex" >
          <Text fontSize="2xl" color="white" className="nav-link">
            Forex
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/crypto" >
          <Text fontSize="2xl" color="white" className="nav-link">
            Crypto
          </Text>
        </Link>
      </Box> 
    </Flex>
  );
}

export default NavBar;
