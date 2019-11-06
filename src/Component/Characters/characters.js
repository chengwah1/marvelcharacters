import React from 'react';
import Character from './Character';

function Characters({characters, page}){ 
    //map arr to Character
    const resPerPage = 3;
    const indexStart = (page-1)*resPerPage;
    const indexEnd = (page)*resPerPage;

    //const totalPages = Math.ceil(props.displaySearchResult.length/resPerPage);

    return (
        <ul>
            {characters.slice(indexStart,indexEnd).map(item => (
            <li key={item.id} className = 'card'>
                <Character name={item.name} image={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
            </li>
            ))}
        </ul>
    );
}

export default Characters; 