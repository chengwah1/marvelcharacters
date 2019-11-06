import React from 'react';
import PropTypes from 'prop-types';

//render page button
const Button = (props) => {
    //return next button
    const nextButton = ()=>{
        return (
            <button className="btn-inline results__btn--next" onClick={()=>props.setCurrentPage('next')}>
                <span>Next</span>
                <svg className="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>
            </button>
        );
    }
    //return prev button
    const prevButton = ()=>{
        return (
            <button className="btn-inline results__btn--prev" onClick={()=>props.setCurrentPage('prev')}>
                <svg className="search__icon">
                    <use href="img/icons.svg#icon-triangle-left"></use>
                </svg>
                <span>Prev</span>
            </button>
        );
    }

    if (props.currentPage===1 && props.totalPages>1){
        return (nextButton())
    }else if(props.currentPage<props.totalPages){
        return (
            <React.Fragment>
                {prevButton()}
                {nextButton()}
            </React.Fragment>
        );
    }else if(props.currentPage===props.totalPages && props.totalPages>1){
        return (
            prevButton()
        );
    }else return null;
}

Button.propTypes = {
totalPages: PropTypes.number.isRequired,
currentPage: PropTypes.number.isRequired,
setCurrentPage: PropTypes.func.isRequired,
}
export default Button;