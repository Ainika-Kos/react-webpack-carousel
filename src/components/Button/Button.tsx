import React, { FC } from 'react';
import './Button.css';

type ButtonProps = {
    text: String;
    clickHandler: () => void;
}

const Button: FC<ButtonProps> = ({ text, clickHandler }) => {
    return (
        <button className="slider-button" onClick={clickHandler}>{text}</button>
    );
};

export default Button;