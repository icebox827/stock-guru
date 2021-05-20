import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { filterStock } from '../actions/index';
import StockFilter from '../components/StockFilter';

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
      <h1>
        Loading data...
      </h1>
    );
  }
  if (error) {
    return (
      <h1>
        Error try again!
      </h1>
    );
  }

  return (
    <Flex
      display="flex"
      w="100%"
      wrap="wrap"
    >

    <StockFilter filterChange={handleChange} />

      {
                filter.map((stock) => (
                  <Card
                    style={{ width: '21rem' }}
                    className="bg-dark text-white mt-5"
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
