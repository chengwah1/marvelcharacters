import React , { useState } from 'react';
import Character from './Character';
import Button from '../Button/Button';

function Characters({characters, setCharFocus}){ 
    //map arr to Character
    const [page, setPage] = useState(1);
    const resPerPage = 3;
    
    const indexStart = (page-1)*resPerPage;
    const indexEnd = (page)*resPerPage;
    const totalPages = Math.ceil(characters.length/resPerPage);

    return (
        <div className = "main-layout">
        <ul className = "CardList">
            {characters.slice(indexStart,indexEnd).map(item => (
            <li key={item.id} onClick={()=>setCharFocus(item)}>
                <Character 
                name={item.name} 
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                id = {item.id}
                />
            </li>
            ))}
        </ul>
        <Button 
            currentPage={page} 
            totalPages={totalPages} 
            setPage={setPage} 
            className = ".btn-inline"/>
        </div>
    );
}

export default Characters; 