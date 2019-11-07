import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getSearchResult } from '../../APICall';
import AutoComplete from './AutoComplete';
import { dictionary } from '../../dictionary';

function SearchBar({setResults}) {
    
    const [query, setQuery] = useState("");
    const [match, setMatch] = useState([]);
    //on submit call api with user query then set to display
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
    //set input value and look up dictionary matches on every key stroke
    const handleChange = (e) => {
        //caches searchText
        const searchText = e.target.value;
        e.preventDefault();
        setQuery(()=>searchText)
        if(searchText.length>1){
            const match = dictionary.filter(item =>
                item.name.substring(0,searchText.length).toUpperCase()===searchText.toUpperCase()
            )
            setMatch(match)
        }else setMatch([])
    }

    return(
        <div>               
            <form className="search" onSubmit={handleSubmit}>
                <div className = "autocomplete">
                <input type="text" 
                className="search__field" 
                placeholder="Search for your fav Marvel hero..."
                onChange={handleChange}
                value={query}/>
                {match.length?<AutoComplete match={match} className ="autocomplete-items"/>:null}
                </div>
                <button className="search__btn">
                    <span>Search</span>
                </button>
            </form>
            
        </div>  )
}

export default SearchBar; 
SearchBar.propTypes = {
    setResults: PropTypes.func.isRequired,
    }
//onSubmit call api save result into state
//auto complete = > on text change call funtion to search dic, return match save into match list
//render match list base on state. on click function, key up key down manipulate class name
