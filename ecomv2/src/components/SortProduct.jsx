import React from 'react';
import './SortProduct.css';

const SortProducts = ({ sortHandler, sortOption }) => {
  return (
    <div className='sort'>
      <h4 className='sort-h4'>Sort Products</h4>
      <label className='sort-label'>
        <input
          type="radio"
          name="sort"
          value="lowToHigh"
          checked={sortOption === 'lowToHigh'}
          onChange={sortHandler}
		  className='sort-input'
		  
        />
        Low to High
      </label>
      <label className='sort-label'>
        <input
          type="radio"
          name="sort"
          value="highToLow"
          checked={sortOption === 'highToLow'}
          onChange={sortHandler}
		  className='sort-input'
        />
        High to Low
      </label>
    </div>
  );
};

export default SortProducts;