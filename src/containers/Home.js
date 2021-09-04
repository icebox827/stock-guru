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
        h="86.5vh"
        w="100%"
        templateRows = "repeat(2, 1fr)"
        templateColumns = "repeat(5, 1fr)"
        gap = {2}
        className="grid"
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
                  <Text fontSize="4xl" align="center" fontWeight="bold">Bitcoin Everyday</Text>
                  <hr />
                </Card.Title>
                <Card.Text>
                  <Text fontSize="3xl" align="center" fontWeight="semibold">{btc.name} {btc.exchange}</Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Price :
                    {' '}
                    {btc.price} USD
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Change Percentage :
                    {' '}
                    {btc.changesPercentage}%
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Change :
                    {' '}
                    {btc.change}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Day Low :
                    {' '}
                    {btc.dayLow} USD
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Day High :
                    {' '}
                    {btc.dayHigh} USD
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Market Cap :
                    {' '}
                    {btc.marketCap}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Volume :
                    {' '}
                    {btc.volume}
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
                    Open :
                    {' '}
                    {btc.open} USD
                  </Text>
                </Card.Text>
                <Card.Text>
                  <Text fontSize="2xl" marginLeft="5">
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
            <Text fontSize="4xl" align="center" fontWeight="bold">Who we are</Text>
            <hr />
            <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="semibold" marginLeft="2">
              Stock Guru is an app designed to help novice have a new look on Stock Market data using real time information.
              We display info on NYSE and NASDAQ companies, Forex and Crypto exchange marker. We are not a data analysis application nor provide
              advices on stock market product
            </Text>
          </Box>
        </GridItem>
        <GridItem
          rowSpan = {1}
          colSpan = {2}
          style = {{ background: `url(${StockBackground1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Box>
            <Text fontSize="4xl" align="center" fontWeight="bold">What we do</Text>
            <hr />
          </Box>
        </GridItem>
      </Grid> 
    
  )
}

export default Home;