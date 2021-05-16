import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStock } from '../actions/index';
import { Card } from 'react-bootstrap';
import { filterStock } from '../actions/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const filters = [
  'actives',
  'gainers',
  'losers'
];

const Stock = () => {
  const dispatch = useDispatch();
  const { stocks, loading, error } = useSelector((state) => state.stocks);
  const [stockFilter, setStockFilter] = useState({
    ticker: '',
    companyName: '', 
    price: '',
    changesPercentage: '',
  });

  const selectedstocks = filters.map(filter => <option key={filter} value={filter}>{filter}</option>);

  const handleChange = e => {
    setStockFilter(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  };

  const filterType = filters.actives ? filters.gainers : filters.losers;

  const handleSubmit = e => {
    e.preventDefault();
    filterStock(filterType);
  };

  

  useEffect(() => {
    dispatch(fetchStock());
  },[dispatch]);

  const renderStocks = () => {
    if (loading) return <h1>Loading data...</h1>;
    if (error) return <h1>Error try again!</h1>;

    return stocks.map((stock) => (
     <Card className="stockCard" key={stock.ticker}>
       <Card.Body>
         <Card.Title className="ticker">{stock.ticker}</Card.Title>
         <Card.Subtitle className="companyName">{stock.companyName}</Card.Subtitle>
         <Card.Text className="mt-3">
            <span className="profit">Price</span>
            {stock.price}
            {' '}
            USD
          </Card.Text>
          <div>
          <span className="profit">Profit</span>
          {' '}
          <span className="data">
            <span className="changes"></span>
            {stock.changesPercentage}
          </span>
          </div>
       </Card.Body>
       <a href="/stock" className="btn btn-primary">More... </a>
     </Card>
    ));
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      <form id="form" className="form-flex" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Filter Stock</legend>
          <label className="form-label">Select a category</label>
          <select
            className="category-field"
            id="category"
            name="category"
            onChange={handleChange}
            value={stockFilter.filter}
          >
            {selectedstocks}
          </select>
          <button type='submit'  className="add-btn">
            Submit
          </button>
        </fieldset>
      </form>
      {renderStocks()}
    </Flex>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    filterStock: (stockFilter) => {
      dispatch(addBook(stockFilter));
    },
  }
};

Stock.propTypes = {
  filterStock: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Stock);