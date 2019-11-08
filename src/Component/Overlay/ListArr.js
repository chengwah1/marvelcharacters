import React from 'react';

//render page button based on current page
const List = ({dataArr, Title, className}) => {
    if (dataArr.length===0)
    return null
    
    return (
        <ul className = {className}>
            <h2>{Title}</h2>
            {dataArr.slice(0,3).map(item => (
            <li key={item.name}>
                {item.name}
            </li>
            ))}
        </ul>
    );
}

export default List;