import React from 'react';
import Character from '../Characters/Character';

function Overlay(props) {
    const { name, description, thumbnail, comics, series, stories, urls} = props.charDetails
    
    const image = `${thumbnail.path}.${thumbnail.extension}`

    return(
    <div className = "overlay">
        {/* close icon */}
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>								
        </button>
        <Character
        name={name} 
        image={image}/>
        <h3>{description}</h3>
        <h3>Test</h3>
    </div>
        )
}

export default Overlay; 