import React from 'react';

function Character({name, image}) {
    return <React.Fragment >
        <img src={image} alt="marvel hero" object-fit="fit" width="300" height="300"/>
        <h1>{name}</h1>
        </React.Fragment>
}

export default Character; 