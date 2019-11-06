import React from 'react';

function Character({name, image}) {
    return <React.Fragment >
        <img src={image} alt="marvel hero"/>
        <p>{name}</p>
        </React.Fragment>
}

export default Character; 