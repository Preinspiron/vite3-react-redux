/* eslint-disable react-hooks/exhaustive-deps */
import Select from 'react-select';
import PropTypes from 'prop-types';
import { filterOptions } from './options';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = ({ change }) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('filter') ?? '';
  const [selectedOption, setSelectedOption] = useState();
  console.log(selectedOption);

  //   useEffect(() => {
  //     change(selectedOption.value);
  //     console.log(selectedOption);
  //   }, [selectedOption]);

  const handleChange = (selectedOption) => {
    change(selectedOption.value);
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      className="filter-container"
      classNamePrefix="filter"
      options={filterOptions}
      value={selectedOption}
      placeholder={!name ? 'Show all' : name}
      onChange={handleChange}
    />
  );
};

Filter.propTypes = {
  change: PropTypes.func,
};

export default Filter;
