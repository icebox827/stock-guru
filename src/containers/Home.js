import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBitcoin } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Container } from 'react-bootstrap';
import { Grid, GridItem, Box } from '@chakra-ui/layout';

const Home = () => {
  const dispatch = useDispatch();
  const { bitcoin, loading, error } = useSelector((state) => state.bitcoin);

  useEffect(
    () => {
      dispatch(fetchBitcoin());
    },
    [dispatch]
  );

  if (loading) {
    return (
      <GridItem colSpan={4}>
        <Loader />
      </GridItem>
    );
  }
  if (error) {
    return (
      <GridItem colSpan={4}>
        <Error />
      </GridItem>
    );
  }

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