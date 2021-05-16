import { Box, Grid, Menu, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Menu>
     <Grid templateColumns="repeat(3, 1fr)">
      <Box bg="tomato">
        <MenuItem>
          <Link to="/">Company</Link>
        </MenuItem>
      </Box>
      <Box bg="tomato">
        <MenuItem>
          <Link to="/stock">Stock</Link>
        </MenuItem>
      </Box>
      <Box bg="tomato">
        <MenuItem>
          <Link to="/forex">Forex</Link>
        </MenuItem>
      </Box>
    </Grid>
  </Menu>
  )
}

export default NavBar;