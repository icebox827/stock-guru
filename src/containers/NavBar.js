import { Box, Grid, Menu, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu>
      <Grid templateColumns='repeat(3, 1fr)'>
        <Box bg='brown'>
          <MenuItem color='white' className='link'>
            <Link to='/'><h3>Stock</h3></Link>
          </MenuItem>
        </Box>
        <Box bg='brown'>
          <MenuItem color='white' className='link'>
            <Link to='/company'><h3>Company</h3></Link>
          </MenuItem>
        </Box>
        <Box bg='brown'>
          <MenuItem color='white' className='link'>
            <Link to='/forex'><h3>Forex</h3></Link>
          </MenuItem>
        </Box>
      </Grid>
    </Menu>
  )
}

export default NavBar
