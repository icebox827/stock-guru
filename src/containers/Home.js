import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBitcoin } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Card } from 'react-bootstrap';
import { Flex, Grid, GridItem, Box, Text } from '@chakra-ui/layout';
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
    <Flex
      display="flex"
      w="100vw"
      wrap="wrap"
    >
      <Flex
        display={['none', 'none', 'flex', 'flex']}
      >
        <Grid
          h="82.2vh"
          w="100vw"
          templateRows = "repeat(2, 1fr)"
          templateColumns = "repeat(5, 1fr)"
          gap = {2}
          className="grid"
          mt={10}
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
          <Box align="center">
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="business" value="H8KJWYJNE4EF8" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="item_name" value="Buy us a coffee" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </Box>
        </GridItem>
        <GridItem
          rowSpan = {1}
          colSpan = {2}
          style = {{ background: `url(${StockBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Box>
            <Text fontSize="4xl" align="center" fontWeight="bold">Who we are</Text>
            <hr />
            <Text noOfLines={[1, 2, 3, 4, 5]} fontSize="2xl" fontWeight="semibold" marginLeft="2">
              Stock Guru is an app designed to help novice have a new look on Stock Market information using real time data. We simplify
              The way data is being displayed and make it easy for anyone to have an idea on how stocks flow everyday in different market.
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
            <Text noOfLines={[1, 2, 3, 4, 5, 6]} fontSize="2xl" fontWeight="semibold" marginLeft="2">
              We display information on NYSE and NASDAQ companies, Forex and Crypto exchange market. We are not a data analysis application nor provide
              advices on stock market product. We do not trade nor selling anything. If you like what we are doing, please buy us a coffee.
            </Text>
          </Box>
        </GridItem>
        </Grid> 
      </Flex>
      <Flex
        display={['flex', 'flex', 'none', 'none']}
        flexDir="column"
      >
        <Card 
          w="100vw"
          mt={10}
          style = {{ background: `url(${BitcoinBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
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
        <Card
          w="100vw"
          style = {{ background: `url(${StockBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Card.Body>
            <Card.Title>
              <Text fontSize="4xl" align="center" fontWeight="bold">Who we are</Text>
            </Card.Title>
            <hr />
            <Card.Text>
              <Text fontWeight="semibold" marginLeft="2">
                We display information on NYSE and NASDAQ companies, Forex and Crypto exchange market. We are not a data analysis application nor provide
                advices on stock market product. We do not trade nor selling anything. If you like what we are doing, please buy us a coffee.
              </Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          w="100vw"
          style = {{ background: `url(${StockBackground1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <Card.Body>
            <Card.Title>
              <Text fontSize="4xl" align="center" fontWeight="bold">What we do</Text>
            </Card.Title>
            <hr />
            <Card.Text>
              <Text fontWeight="semibold" marginLeft="2">
                We display information on NYSE and NASDAQ companies, Forex and Crypto exchange market. We are not a data analysis application nor provide
                advices on stock market product. We do not trade nor selling anything. If you like what we are doing, please buy us a coffee.
              </Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </Flex>
    </Flex>
  )
}

export default Home;