import React , {useContext} from 'react';
import Button from '../Button/Button1';
import LikeListContext from '../../LikeListContext';

function Character({name, image, id}) {

    const {likeList,setLikeList} = useContext(LikeListContext);
    const match = likeList.findIndex((item)=>item.id===id)

    return <div className = "Card">
                
                <img src={image} alt="marvel hero" object-fit="fit" width="300" height="300"/>
                <h1>{name}</h1>
                <Button displayText={match===-1?"Save to favorite":"Remove from favorite"} onClick={(e)=>{
                //add to like list
                setLikeList(id,name,match)
                e.stopPropagation()}}/>
            </div>
            }

export default Character; 