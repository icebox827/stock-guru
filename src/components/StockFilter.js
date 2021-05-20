import React from 'react';
import PropTypes from 'prop-types';

const StockFilter = ({filterChange}) => {
  const filters = ['All', 'NASDAQ', 'NYSE'];

  const selectedstocks = filters.map(filter => (
    <option key={filter} value={filter === 'All'? '' : filter}>
      {filter}
    </option>
  ));

  return (
    <div>
      <form
        className="form-flex"
        id="form"
      >
        <fieldset>
          <legend>
            Filter Stock
          </legend>

          <label className="form-label">
            Select a category
          </label>

          <select
            className="category-field"
            id="category"
            name="category"
            onChange={e => filterChange(e.target.value)}
          >
            {selectedstocks}
          </select>
        </fieldset>
      </form>
    </div>
  )
};

StockFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default StockFilter;
