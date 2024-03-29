import React from 'react';
import PropTypes from 'prop-types';

//render page button based on current page
const Button = (props) => {
    //return next button
    const nextButton = ()=>{
        return (
            <button className="btn-inline results__btn--next" onClick={()=>props.setPage(props.currentPage+1)}>
                <span>Next</span>
            </button>
        );
    }
    //return prev button
    const prevButton = ()=>{
        return (
            <button className="btn-inline results__btn--prev" onClick={()=>props.setPage(props.currentPage-1)}>
                <span>Prev</span>
            </button>
        );
    }

    if (props.currentPage===1 && props.totalPages>1){
        return (<div className = "button">{nextButton()}</div>)
    } 
    if(props.currentPage<props.totalPages){
        return (
            <div className = "button">
            {prevButton()}
            {nextButton()}
            </div>
        );
    }
    if(props.currentPage===props.totalPages && props.totalPages>1){
        return (
            <div className = "button">{prevButton()}</div>
        );
    }else return null;
}

Button.propTypes = {
totalPages: PropTypes.number.isRequired,
currentPage: PropTypes.number.isRequired,
setPage: PropTypes.func.isRequired,
}
export default Button;