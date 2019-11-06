import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getSearchResult } from '../../APICall';

function Searchbar({setResult}) {
    
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //call api with search query
        getSearchResult(value)
        .then(
        (promise)=>{
            setResult(promise);
        })
        setValue("");
    }

    return(                 
    <form className="search" onSubmit={handleSubmit}>
        <input type="text" 
        className="search__field" 
        placeholder="Search for your fav Marvel hero..."
        onChange={e => setValue(e.target.value)}
        value={value}/>
        <button className="btn search__btn">
            <span>Search</span>
        </button>
    </form>)
}

export default Searchbar; 
Searchbar.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    }
//onSubmit call api save result into state