import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockItem } from '../actions/index';
import { Jumbotron, Container } from 'react-bootstrap';
import { BsFillForwardFill } from 'react-icons/bs';
import { FcBullish, FcBearish } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const StockDetail = () => {
  const dispatch = useDispatch();
  const { stockItem, loading, error } = useSelector((state) => state.stockItem);
  const { ticker } = useParams();

  console.log(ticker)

  useEffect(() => {
    dispatch(fetchStockItem(ticker));
  },[dispatch])

  if (loading) return <h1>Loading data...</h1>;
  if (error) return <h1>Error try again!</h1>;

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="shadow-sm pb-2 mb-3">
            { stockItem.symbol }
            <small className="priceChange">
              <BsFillForwardFill color="transparent" />
              Price:
              {' '}
              { stockItem.price }
              <BsFillForwardFill color="transparent" />
              Price change:
              {' '}
              <span className={`${stockItem.changes > 0 ? 'text-success' : 'text-danger'}`}>{ stockItem.changes }</span>
              <BsFillForwardFill color="transparent" />
              {stockItem.changes > 0 ? <FcBullish size={40} /> : <FcBearish size={40} />}
            </small>
          </h1>
          <h2 className="text-center text-success">
            <BsFillForwardFill color="transparent" />
            CEO:
            {' '}
            { stockItem.ceo }
          </h2>
          <h4 className="text-center text-success">
            { stockItem.companyName }
            <BsFillForwardFill color="transparent" />
            <small>
              Industry:
              { stockItem.industry }
            </small>
            <hr />
          </h4>
          <p className="lead text-justify readMaxLength">
            <img
              src={stockItem.image}
              alt={stockItem.symbol}
              onError={e => {
                e.target.src = notFound;
              }}
              className="float-left m-2 img-thumbnail w-25"
            />
            { stockItem.description }
            <a href={stockItem.website} target="__blank" rel="noopener">
              {' '}
              Visit Website
            </a>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

StockDetail.propTypes = {
  stockItem: PropTypes.shape({
    symbol: PropTypes.string,
    price: PropTypes.number,
    changes: PropTypes.number,
    companyName: PropTypes.string,
    industry: PropTypes.string,
    website: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

StockDetail.defaultProps = {
  stockItem: {},
};

export default StockDetail;