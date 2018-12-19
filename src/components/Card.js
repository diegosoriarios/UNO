import React, { Component } from 'react';
import '../style/style.css'

const cor = ["red", "blue", "green", "yellow", "black"]

class Card extends Component {
    render(){
        return(
            <div className="carta">
                <div className="box-carta" style={{backgroundColor: cor[this.props.cor]}}>
                    <h3>{this.props.numero}</h3>
                </div>
            </div>
        );
    }
}

export default Card;