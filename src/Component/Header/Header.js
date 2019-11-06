import React from 'react';
import Searchbar from './Searchbar';

function Header({setResult}) {
    return <React.Fragment >
        <Searchbar setResult={setResult}/>
        {/* like button */}
        </React.Fragment>
}

export default Header; 