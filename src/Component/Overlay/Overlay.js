import React from 'react';
import Character from '../Characters/Character';
import ListArr from './ListArr';
import URLs from './URLs';

function Overlay(props) {
    //if no character on focus
    if (Object.entries(props.charDetails).length === 0 && props.charDetails.constructor === Object)
    return null

    const { id, name, description, thumbnail, comics, series, stories, urls} = props.charDetails
    const image = `${thumbnail.path}.${thumbnail.extension}`
    
    //overlay state and handler
    const isOpen = props.overLayStatus
    const toggleOverLay = props.toggleOverLay
    
    return(
    <div className = {isOpen?"overlay":"overlay close"}>
        <button onClick={toggleOverLay} className="overlaybtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>								
        </button>
        <Character
        name={name} 
        image={image}
        id = {id}/>
        <h3>{description}</h3>
        <ListArr dataArr={comics.items} Title={"Comics"} className = {"ListComics"}/>
        <ListArr dataArr={series.items} Title={"Series"} className = {"ListSeries"}/>
        <ListArr dataArr={stories.items} Title={"Stories"} className = {"ListStories"}/>
        <URLs dataArr={urls} Title={"URLs"} className = {"URLs"}/>
    </div>
        )
}

export default Overlay; 