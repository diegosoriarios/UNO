import React, { Component } from 'react';
import '../style/style.css'

const cor = ["#ff6961", "#5d9b9b", "#77dd77", "#fdfd96", "black"]

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
                    if(carta[1] % 2 === 0){
                        color = 4
                        numero = '+4'
                    }else{
                        color = 4
                        numero = '#'
                    }
                }else{
                    if(carta[0] === 10){
                        color = carta[1]
                        if(carta[1] % 2 === 0){
                            numero = '+2'
                        }else{
                            numero = 'ø'
                        }
                    }else{
                        numero = carta[0]
                        color = carta[1]
                    }
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