import { css } from '@emotion/css';
import React from 'react';
import './style.css';

export default function (props) {

    const buttonText = props.buttonText;
    const onButtonClick = props.onButtonClick;

    return (
        <button onClick={onButtonClick} className={css(actionButton)}>
            {buttonText}
        </button>
    )
}

const actionButton = css`
    background-color: #e50914;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
`