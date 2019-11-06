import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getSearchResult } from '../../APICall';

function SearchBar({setResults}) {
    
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //call api with search query
        getSearchResult(query)
        .then(
        (promise)=>{
            setResults(promise);
        })
        setQuery("");
    }

    return(                 
    <form className="search" onSubmit={handleSubmit}>
        <input type="text" 
        className="search__field" 
        placeholder="Search for your fav Marvel hero..."
        onChange={e => setQuery(e.target.value)}
        value={query}/>
        <button className="btn search__btn">
            <span>Search</span>
        </button>
    </form>)
}

export default SearchBar; 
SearchBar.propTypes = {
    setResults: PropTypes.func.isRequired,
    }
//onSubmit call api save result into state