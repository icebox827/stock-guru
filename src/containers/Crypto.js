import { uesEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, GridItem } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
import { fetchCrypto } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Crypto = () => {
  const dispatch = useDispatch();
  
};

export default Crypto;