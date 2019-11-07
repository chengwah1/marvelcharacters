import React from 'react';

function AutoComplete({match}) {
    return(
    <ul className="autocomplete-items">
        {match.map(item => (
            <li key={item.id} >
                {item.name}
            </li>
            ))}
    </ul>)
        
}

export default AutoComplete; 