import React from 'react';
import './style.css';

export default function (props) {

    const buttonText = props.buttonText;
    const onButtonClick = props.onButtonClick;

    return (
        <button onClick={onButtonClick} className='action-button'>
            {buttonText}
        </button>
    )
}
