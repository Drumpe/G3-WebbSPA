
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFor, selectedSearchFor } from './SearchForSlice';
import { useState } from 'react';

const SearchBox = () => {
    const searchInput = useSelector(selectedSearchFor);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("")

    const handleSearchForChange = () => {
        dispatch(setSearchFor(searchValue));
    };

    return (
        <div className="mr-auto navbar-nav no-underline">
            <input
                className="search-input no-underline "
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Sök..."
            />
            <button className="search-btn" onClick={handleSearchForChange}>
                <img className="search-btn-img" src="./public/Images/search.png" alt="Search" />
            </button>
        </div>
    );
};
export default SearchBox;