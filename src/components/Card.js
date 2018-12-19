import React, { Component } from 'react';
import '../style/style.css'

const cor = ["red", "blue", "green", "yellow", "black"]

class Card extends Component {
    render(){
        let carta = []
        carta[1] = this.props.cor
        carta[0] = this.props.numero
        let color, numero
        if(carta[0] === 12){
            numero = '+4'
            color = this.props.cor
        }else{
            if(carta[0] === 13){
                numero = '#'
                color = this.props.cor
            }else{
                if(carta[0] === 11){
                    switch(carta[1]){
                        case 0:
                            color = 4
                            numero = '+4'
                            break;
                        case 1:
                            color = carta[1]
                            numero = '+2'
                            break;
                        case 2:
                            color = 4
                            numero = '#'
                            break;
                        case 3:
                            color = carta[1]
                            numero = 'ø'
                            break;
                        default:
                            color = carta[1]
                            numero = carta[0]
                    }
                }else{
                    numero = carta[0]
                    color = carta[1]
                }
            }
        }
        return(
            <div className="carta">
                <div className="box-carta" style={{backgroundColor: cor[color]}}>
                    <h3>{numero}</h3>
                </div>
            </div>
        );
    }
}

export default Card;