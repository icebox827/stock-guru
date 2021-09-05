import { Flex, Text, GridItem } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { fetchCrypto } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Crypto = () => {
  const dispatch = useDispatch();
  const { crypto, loading, error } = useSelector((state) => state.crypto);

  useEffect(
    () => {
      dispatch(fetchCrypto());
    },
    [dispatch]
  );

  const renderCrypto = () => {
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

    return crypto.map((cx) => (
      <Card
      className="bg-dark text-white mt-3"
      style={{ width: '21rem' }}
      key={cx.symbol}
      >
      <Card.Body>
        <Card.Title>
          <Text>
            {cx.symbol}
          </Text>
        </Card.Title>
        <Card.Text>
          <Text>
            Name:
            {' '}
            {cx.name}
          </Text>
        </Card.Text>
        <Card.Text>
          <Text>
            Currency:
            {' '}
            {cx.currency} USD
          </Text>
        </Card.Text>
        <Card.Text>
          <Text>
            Stock Exchange:
            {' '}
            {cx.stockExchange}
          </Text>
        </Card.Text>
        <Card.Text>
          <Text>
            Exchange Short Name:
            {' '}
            {cx.exchangeShortName}
          </Text>
        </Card.Text>
      </Card.Body>
      </Card>
    ))
  }

  return (
    <Flex
      display="flex"
      w="100%"
      wrap="wrap"
    >
      {renderCrypto()}
    </Flex>
  )
};

export default Crypto;