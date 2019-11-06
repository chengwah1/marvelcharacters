import React , { useState } from 'react';
import Character from './Character';
import Button from '../Button/Button';

function Characters({characters}){ 
    //map arr to Character
    const [page, setPage] = useState(2);
    const resPerPage = 3;
    const indexStart = (page-1)*resPerPage;
    const indexEnd = (page)*resPerPage;
    const totalPages = Math.ceil(characters.length/resPerPage);

    return (
        <React.Fragment>
        <ul className = "CardList">
            {characters.slice(indexStart,indexEnd).map(item => (
            <li key={item.id} className = 'Card'>
                <Character name={item.name} image={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
            </li>
            ))}
        </ul>
        <Button currentPage={page} totalPages={totalPages} setCurrentPage={setPage}/>
        </React.Fragment>
    );
}

export default Characters; 