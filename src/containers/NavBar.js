import { useState } from 'react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex, MenuItem, Menu, Text, Box, Spacer, Divider, IconButton
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [display, setDisplay] = useState('none');
  return (
    <Flex 
      classNameName="Navbar" 
      backgroundColor="teal" 
      h="3rem" 
      w="100vw"
      pos="fixed"
      align="center"
    >
      <Box>
        <Link to="/">
          <Text fontSize="2xl" color="yellow.500" className="nav-link">
            Stock Guru
          </Text>
        </Link>
      </Box>
      <Flex
        display={display}
        w="100vw"
        h="100vh"
        backgroundColor="teal"
        pos="fixed"
        align="center"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        zIndex={20}
      >
        <Flex justify="flex-end">
          <IconButton 
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="md"
            icon={
              <CloseIcon />
            }
            backgroundColor="teal.100"
            onClick={() => setDisplay('none')}
          />
        </Flex>
        <Flex
          flexDir="column"
          align="center"
        >
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
      </Flex>
      <Flex 
        display={['none', 'none', 'flex', 'flex']}
      >
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
      <Spacer />
      <IconButton 
        aria-label="Open Menu"
        size="md"
        mr={2}
        icon={
          <HamburgerIcon />
        }
        display={['flex', 'flex', 'none', 'none']}
        backgroundColor="teal.100"
        onClick={() => setDisplay('flex')}
      />
    </Flex>
  );
}

export default NavBar;
