import React, { useState } from 'react';
import { getSearchResult } from '../../APICall';
import AutoComplete from './AutoComplete';
import { dictionary } from '../../dictionary';
import Button from '../Button/Button1';

function SearchBar({setResults , toggle}) {
    
    const [query, setQuery] = useState("");//form query
    const [match, setMatch] = useState([]);//autocomplete list
    //on submit call api with user query then set to display
    const handleSubmit = (event) => {
        event.preventDefault();
        //toggle loading
        //call api with search query
        toggle("loader")
        getSearchResult(query)
        .then(
        (promise)=>{
            setResults(promise);
        })
        setQuery("");
        setMatch([])
    }
    //set input value and look up dictionary matches on every key stroke
    const handleChange = (e) => {
        //caches searchText
        const searchText = e.target.value;
        e.preventDefault();
        setQuery(searchText)
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
                {match.length?
                <AutoComplete 
                    match={match} 
                    className ="autocomplete-items"
                    onClick={e=>{setQuery(e.target.innerHTML);setMatch([]);}}/>
                :null}
                </div>
                <Button displayText={"search"}/>
            </form>
        </div>  )
}

export default SearchBar;
