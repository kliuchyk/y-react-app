import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Slider } from 'antd';

import { ORIGIN_OPTIONS } from './constants';
import { setNewFilters } from '../../actions';

function FilterMenu() {
  const [price, setPrice] = useState([]);
  const [origins, setOrigins] = useState([]);

  const dispatch = useDispatch();

  function onChange(checkedValues: any): void {
    setOrigins(checkedValues);
  }

  const applyFilters = () => {
    dispatch(setNewFilters({ origins, price }));
  };

  const handlePriceChange = (value: any) => {
    setPrice(value);
  };

  return (
    <div>
      <h3>Filters:</h3>

      <div>
        Country: <Checkbox.Group options={ORIGIN_OPTIONS} onChange={onChange} />
      </div>

      <div>
        Price:
        <Slider
          range
          defaultValue={[0, 3000]}
          min={0}
          max={5000}
          onChange={handlePriceChange}
        />
      </div>

      <button onClick={applyFilters}>Apply filters</button>
    </div>
  );
}

export default FilterMenu;
