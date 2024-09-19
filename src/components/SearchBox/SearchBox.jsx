import css from './SearchBox.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();

    const filterValue = useSelector(state => state.filters.name);

    const handleFilter = (e) => {
        const value = e.target.value;
        dispatch(setFilterValue(value));
    };

    return (
        <div>
            <p>Find contact by name</p>
            <input className={css.input} type="text" value={filterValue} onInput={handleFilter} />
        </div>
    );
}

export default SearchBox