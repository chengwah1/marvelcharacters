import React from 'react';
import SearchBar from './Searchbar';

function Header({setResults}) {
    return <React.Fragment >
        <SearchBar setResults={setResults}/>
        {/* like button */}
        </React.Fragment>
}

export default Header; 