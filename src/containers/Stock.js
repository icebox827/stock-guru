import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStock } from '../actions/index';
import { Card } from 'react-bootstrap';
import { filterStock } from '../actions/index';

const filters = [
  'actives',
  'gainers',
  'losers'
];

const Stock = () => {
  const dispatch = useDispatch();
  const { stocks, loading, error } = useSelector((state) => state.stocks);

  const selectedstocks = filters.map(filter => <option key={filter} value={filter}>{filter}</option>);

  const handleChange = e => {
    dispatch(filterStock(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchStock());
  },[dispatch]);

  const renderStocks = () => {
    if (loading) return <h1>Loading data...</h1>;
    if (error) return <h1>Error try again!</h1>;

    return stocks.map((stock) => (
     <Card style={{ width: '21rem' }} className="bg-dark text-white mt-5" key={stock.ticker}>
       <Card.Body>
         <Card.Title className="ticker">{stock.ticker}</Card.Title>
         <Card.Subtitle className="companyName">{stock.companyName}</Card.Subtitle>
         <Card.Text className="stockText">
            <span className="profit">Price: </span>
            {stock.price}
            {' '}
            USD
            <br />
            <span className="profit">Profit: </span>
            {' '}
            {stock.changesPercentage}
          </Card.Text>
       </Card.Body>
     </Card>
    ));
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      <form id="form" className="form-flex">
        <fieldset>
          <legend>Filter Stock</legend>
          <label className="form-label">Select a category</label>
          <select
            className="category-field"
            id="category"
            name="category"
            onChange={handleChange}
          >
            {selectedstocks}
          </select>
        </fieldset>
      </form>
      {renderStocks()}
    </Flex>
  )
};

export default Stock;