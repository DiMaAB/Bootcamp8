import React from 'react';
import style from'./button.css';

const button = ({text}) => {
    return (
        <div>
            <button className={`${style.button} ${style.text}`}><span className={style.text}>{text}</span></button>
        </div>
    );
};

export default button;