import React from 'react';

function Character({name, image}) {
    return <div className = "Card">
        <img src={image} alt="marvel hero" object-fit="fit" width="300" height="300"/>
        <h1>{name}</h1>
        </div>
}

export default Character; 