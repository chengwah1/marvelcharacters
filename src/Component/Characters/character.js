import React from 'react';

function Character({name, image}) {
    return <React.Fragment >
        <img src={image} alt="marvel hero" width="300" height="auto"/>
        <h1>{name}</h1>
        </React.Fragment>
}

export default Character; 