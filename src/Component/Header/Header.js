import React from 'react';
import SearchBar from './Searchbar';

function Header({setResult}) {
    return <React.Fragment >
        <SearchBar setResult={setResult}/>
        {/* like button */}
        </React.Fragment>
}

export default Header; 