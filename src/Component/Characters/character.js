import React , {useContext} from 'react';
import Button from '../Button/Button1';
import LikeListContext from '../../LikeListContext';

function Character({name, image, id}) {

    const value = useContext(LikeListContext);
    const match = value.likeList.findIndex((item)=>item===id)

    return <div className = "Card">
                <p>{value.likeList}</p>
                <img src={image} alt="marvel hero" object-fit="fit" width="300" height="300"/>
                <h1>{name}</h1>
                <Button displayText={match===-1?"Save to favorite":"Remove from favorite"} onClick={(e)=>{
                //add to like list
                value.setLikeList(id,match)
                e.stopPropagation()}}/>
            </div>
            }

export default Character; 