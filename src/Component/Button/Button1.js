import React from 'react';

//render page button based on current page
const Button = ({displayText, onClick, className}) => {
    return (
        <button className={className} onClick={onClick}>
            <span>{displayText}</span>
        </button>
    );
}

export default Button;