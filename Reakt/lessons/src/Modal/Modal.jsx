import React from 'react';
import './Modal.css';
const Modal = ({toggleModal}) => {
    return (
        <div className="owerlay" onClick={toggleModal}>
        <div className='modal'>
        <span className='cloce'>X</span>
        </div>
            
        </div>
    );
};

export default Modal;