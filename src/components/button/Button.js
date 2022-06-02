import React from 'react';
import './Button.module.css';


const Button = ({children, type, disabled, ClickHandler}) => {
    return (
        <div>
            <button
                className="button-styling"
                type={type}
                onClick={ClickHandler}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;










