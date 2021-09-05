import { Flex, GridItem } from '@chakra-ui/layout';
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
    <Container>
      <Row>
        
      </Row>
    </Container>
  )

};

export default Crypto;