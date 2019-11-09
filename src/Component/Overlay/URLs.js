import React from 'react';

//render page button based on current page
const URLs = ({dataArr, Title, className}) => {
    if (dataArr.length===0)
    return null

    return (
        <ul className = {className}>
            <h2>{Title}</h2>
            {dataArr.map(item => (
            <li key={item.type}>
                <a href={item.url} target="_blank" rel="noopener noreferrer"><h2>{item.type}</h2></a>
            </li>
            ))}
        </ul>
    );
}

export default URLs;