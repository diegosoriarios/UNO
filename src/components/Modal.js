import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="box-modal">
                <h3>{props.title}</h3>
                <button onClick={() => props.show(0)}>RED</button>
                <button onClick={() => props.show(1)}>BLUE</button>
                <button onClick={() => props.show(2)}>GREEN</button>
                <button onClick={() => props.show(3)}>YELLOW</button>
            </div>
        </div>
    );
}

export default Modal;