import { Flex, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { filterStock } from '../actions/index';
import StockFilter from '../components/StockFilter';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Stock() {
  const dispatch = useDispatch();
  const { filter, loading, error } = useSelector((state) => state.filter);

  const handleChange = (filter) => {
    dispatch(filterStock(filter));
  };

  useEffect(
    () => {
      dispatch(filterStock());
    },
    [dispatch],
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
    <Flex
      display="flex"
      w="100vw"
      wrap="wrap"
    >
      <Flex 
        display="flex"
        align="center"
        className="modifier"
      >
        <StockFilter filterChange={handleChange} />
      </Flex>
      {
                filter.map((stock) => (
                  <Card
                    style={{ width: '21rem' }}
                    className="bg-dark text-white modifier"
                    key={stock.ticker}
                  >
                    <Card.Body>
                      <Card.Title className="ticker">
                        {stock.ticker}
                      </Card.Title>

                      <Card.Subtitle className="companyName">
                        {stock.companyName}
                      </Card.Subtitle>

                      <Card.Text className="stockText">
                        <span className="profit">
                          Price:
                          {' '}
                        </span>

                        {stock.price}

                        {' '}
                        USD

                        <br />

                        <span className="profit">
                          Profit:
                          {' '}
                        </span>

                        {' '}

                        {stock.changesPercentage}
                      </Card.Text>
                    </Card.Body>

                    <a
                      className="btn"
                      href={`\\stockDetail\\${stock.ticker}`}
                    >
                      Details
                    </a>
                  </Card>
                ))
            }
    </Flex>
  );
}

Stock.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string,
    changesPercentage: PropTypes.string.isRequired,
  }),
};

export default Stock;
