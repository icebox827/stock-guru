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
import StockBackground1 from '../assets/stock.png'

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
          <Card>
            { bitcoin.map((btc) => (
              <Card.Body key={btc.synmbol}>
                <Card.Title>
                  <Text fontSize="3xl" align="center">Bitcoin Everyday</Text>
                  <hr />
                </Card.Title>
                <Card.Text >
                <Card.Text>
                  <Text>
                    Name :
                    {' '}
                    {btc.name}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Exchange :
                    {' '}
                    {btc.exchange}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Price :
                    {' '}
                    {btc.price} USD
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Change Percentage :
                    {' '}
                    {btc.changesPercentage}%
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Change :
                    {' '}
                    {btc.change}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Day Low :
                    {' '}
                    {btc.dayLow} USD
                  </Text>
                </Card.Text>
                <Card.Text>
                  Day High :
                  {' '}
                  {btc.dayHigh} USD
                </Card.Text>
                <Card.Text>
                  <Text>
                    Market Cap :
                    {' '}
                    {btc.marketCap}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Volume :
                    {' '}
                    {btc.volume}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Open :
                    {' '}
                    {btc.open} USD
                  </Text>
                </Card.Text>
                </Card.Text>
                <Card.Text>
                  <Text>
                    Previous Close :
                    {' '}   
                    {btc.previousClose} USD
                  </Text>
                </Card.Text>
              </Card.Body>
              
            )) }
          </Card>
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
          style = {{ background: `url(${StockBackground1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Box>
            <Text fontSize="4xl" align="center">What we do</Text>
          </Box>
        </GridItem>
      </Grid> 
    
  )
}

export default Home;