import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBitcoin } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Card } from 'react-bootstrap';
import { Grid, GridItem, Box, Text } from '@chakra-ui/layout';
import BitcoinBackground from '../assets/Bitcoin.png'
import StockBackground from '../assets/stock_background.png';

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
      <GridItem>
        <Loader />
      </GridItem>
    );
  }
  if (error) {
    return (
      <GridItem>
        <Error />
      </GridItem>
    );
  }

  return (
   
      <Grid
        h="60vh"
        w="100%"
        templateRows = "repeat(2, 1fr)"
        templateColumns = "repeat(5, 1fr)"
        gap = {2}
      >
        <GridItem
          className = "overlay"
          rowSpan = {2}
          colSpan = {3}
          style = {{ background: `url(${BitcoinBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Box>
            { bitcoin.map((btc) => (
              <Text key={btc.synmbol}>
                Name :
                {' '}
                {btc.name}
                <br/>
                Exchange :
                {' '}
                {btc.exchange}
                <br/>
                Price :
                {' '}
                $US {btc.price}
                <br/>
                Change Percentage :
                {' '}
                {btc.changesPercentage}%
                <br/>
                Change :
                {' '}
                {btc.change}
                <br/>
                Day Low :
                {' '}
                $US {btc.dayLow}
                <br/>
                Day High :
                {' '}
                $US {btc.dayHigh}
                <br/>
                Market Cao :
                {' '}
                {btc.marketCap}
                <br/>
                Volume :
                {' '}
                {btc.volume}
                <br/>
                Open :
                {' '}
                $US {btc.open}
                <br/>
                Previous Close :
                {' '}
                $US {btc.previousClose}
              </Text>
            )) }
          </Box>
        </GridItem>
        <GridItem
          rowSpan = {1}
          colSpan = {2}
          style = {{ background: `url(${StockBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Box>
            <Text fontSize="4xl" align="center">Who we are</Text>
          </Box>
        </GridItem>
        <GridItem
          rowSpan = {1}
          colSpan = {2}
        >
          <Box>
            <Text fontSize="4xl" align="center">What we do</Text>
          </Box>
        </GridItem>
      </Grid> 
    
  )
}

export default Home;