import React from 'react';
import SearchBar from './Searchbar';
import DropDown from './Dropdown';



function Header({setResults, toggle}) {

    return <div className ="header">
        <SearchBar setResults={setResults} toggle={toggle}/>
        <DropDown />
    </div>
}

export default Header; 