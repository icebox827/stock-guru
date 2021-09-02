import React from 'react';
import { Container } from 'react-bootstrap';
import { Grid, GridItem, Box } from '@chakra-ui/layout';

const Home = () => {
  return (
    <Container>
      <Grid
        h="60vh"
        templateRows = "repeat(2, 1fr)"
        templateColumns = "repeat(5, 1fr)"
        gap = {4}
      >
        <GridItem
          rowSpan = {2}
          colSpan = {3}
          style = {{ backgroundImage: "url(./assets/Bitcoin.png)" }}
        >
          <Box>
            First grid
          </Box>
        </GridItem>
        <GridItem
          rowSpan = {1}
          colSpan = {2}
        >
          <Box>
            Second grid
          </Box>
        </GridItem>
        <GridItem
          rowSpan = {1}
          colSpan = {2}
        >
          <Box>
            Third grid
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Home;