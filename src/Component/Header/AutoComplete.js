import React from 'react';

function AutoComplete({match, className, onClick}) {
    return(
    <ul className={className}>
        {match.map(item => (
            <li key={item.id} onClick={onClick} value={item.name}>
                {item.name}
            </li>
            ))}
    </ul>)
}

export default AutoComplete; 