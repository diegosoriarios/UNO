import React, { Component } from 'react';
import '../style/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

library.add(faBan, faReact, faThLarge)

const cor = ["#ff6961", "#5d9b9b", "#77dd77", "#e1e105", "black"]

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
                            numero = <FontAwesomeIcon icon="ban" className="icon" />
                        }
                    }else{
                        numero = carta[0]
                        color = carta[1]
                    }
                }
            }
        }
        if(carta[0] === 'JS'){
            numero =  <FontAwesomeIcon icon = {['fab','react']} className="icon" /> 
        }
        return(
            <div className="carta">
                <div className="box-carta" style={{backgroundColor: cor[color]}}>
                    <div className="white-mark">
                        <h3 style={{color: cor[color]}}>{numero}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;