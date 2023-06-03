/* eslint-disable react-hooks/exhaustive-deps */
import Select from 'react-select';
import PropTypes from 'prop-types';
import { filterOptions } from './options';
import { useState, useEffect } from 'react';


const Filter = ({ change }) => {
  const [selectedOption, setSelectedOption] = useState(filterOptions[0]);

  useEffect(() => {
    change(selectedOption.value);
  }, [selectedOption]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      className="filter-container"
      classNamePrefix="filter"
      options={filterOptions}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

Filter.propTypes = {
  change: PropTypes.func,
};

export default Filter;
