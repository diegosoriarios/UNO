import React from 'react'
import '../style/style.css'

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="box-modal">
                <h3>{props.title}</h3>
                <button onClick={() => props.show(0)}>_</button>
                <button onClick={() => props.show(1)}>_</button>
                <button onClick={() => props.show(2)}>_</button>
                <button onClick={() => props.show(3)}>_</button>
            </div>
        </div>
    );
}

export default Modal;