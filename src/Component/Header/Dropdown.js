import React , {useContext} from 'react';
import Button from '../Button/Button1';
import LikeListContext from '../../LikeListContext';

//like list dropdown
function DropDown() {

    const {likeList,setLikeList} = useContext(LikeListContext);
    
    return (
    <div className ={"dropdown"}>
        <Button displayText ={"Favorite"} className={"LikeBtn"}/>
        <div className={"dropdown-content"}>{
            likeList.map(item=>(
                <li className="dropdown-content-item" key={item.id}>
                    <div className = "hero-name">{item.name}</div>
                    <button className={"close-btn"} onClick={()=>{
                        const index = likeList.findIndex((arr)=>arr.id===item.id);console.log(index)
                        setLikeList(item.id,item.name,index)}}>
                        x
                    </button>
                </li>)
            )}
        </div>
    </div>)
}

export default DropDown; 


