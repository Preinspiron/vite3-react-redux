import { Select } from "react-select";
import { filterOptions } from './options';

const Filter = () => {
    

    // handleChange = (e) => {
    //     console.log(e.target.value);
    //     // записать это значение в стейт, от него будет зависеть список твитс
    //     // если есть рубрика то массив твитсов будет фильтроваться по условию, 
    //     // если другой список то противоречие условию, если все, то просто меп.
    // }

return <Select
className="filter-container"
classNamePrefix="filter"
options ={filterOptions}
// onChange ={handleChange}
/>

}
export default Filter;
