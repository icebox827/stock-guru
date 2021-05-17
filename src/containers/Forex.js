import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForex } from '../actions/index';
import { Card } from 'react-bootstrap';

const Forex = () => {
  const dispatch = useDispatch();
  const { forex, loading, error } = useSelector((state) => state.forex);

  useEffect(() => {
    dispatch(fetchForex());
  }, [dispatch]);

  const renderForex = () => {
    if (loading) return <h1>Loading data...</h1>;
    if (error) return <h1>Error try again!</h1>;

    return forex.map((fx) => (
      <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={fx.ticker}>
        <Card.Body>
          <Card.Title className="ticker"><h2>{fx.ticker}</h2></Card.Title>
          <Card.Text className="forexText">
            <h3>Bid : {fx.bid}</h3>
            <h3>Ask : {fx.ask}</h3>
            <h3>Open: {fx.open}</h3>
            <h3>Low: {fx.low}</h3>
            <h3>High: {fx.high}</h3>
            <h6>Changes: {fx.changes}</h6>
            <h5>Date: {fx.date}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {renderForex()}
    </Flex>
  )
};

export default Forex;