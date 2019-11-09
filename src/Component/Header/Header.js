import React from 'react';
import SearchBar from './Searchbar';
import DropDown from './Dropdown';


function Header({setResults}) {

    return <div className ="header">
        <SearchBar setResults={setResults}/>
        <DropDown />
    </div>
}

export default Header; 