import Select from 'react-select';
import PropTypes from 'prop-types';
import  {filterOptions}  from './options';
import { useState, useEffect } from 'react';
// сделать так что бі при обновлении страницы инишиал стейт принимал уже выбранное ранее значение 
const Filter = ({change}) => {
    const [selectedOption, setSelectedOption] = useState(filterOptions[0]); 
    
    
    useEffect(() => {
        change(selectedOption.value.toString());
    }, [selectedOption])
    
    const handleChange = (selectedOptions) => {
        setSelectedOption(selectedOptions);
    }
  
return (<Select
className="filter-container"
classNamePrefix="filter"
options ={filterOptions}
value={selectedOption}
onChange ={handleChange}
/>)

}

Filter.propTypes = {
    change:PropTypes.func,
  }

export default Filter;
