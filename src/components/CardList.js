import React, {Component} from 'react'
//import Card from './Card';
import '../style/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faSquare } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

library.add(faBan, faSquare)
library.add(faReact)

const cor = ["#ff6961", "#5d9b9b", "#77dd77", "#e1e105", "black"]

export default class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    useCard = (i) => {
        this.props.remove(i)
    }

    render(){
        let CardListItem, numero, color;
        if(this.props.cards){
            CardListItem = this.props.cards.map((carta, i) => {
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
                            numero = <FontAwesomeIcon icon="ban" className="icon"/>
                        }
                    }else{
                        numero = carta[0]
                        color = carta[1]
                    }
                }
                return (
                    <div key={i} className="carta" onClick={() => this.useCard(i)}>
                        <div className="box-carta" style={{backgroundColor: cor[color]}}>
                            <div className={carta[0] === 11 ? "picker" : "white-mark"}>
                                <h3 style={{color: cor[color]}}>{numero}</h3>
                            </div>
                        </div>
                    </div>
                );
            });
        }else {
            CardListItem = this.props.hideCard.map((carta, i) => {
                return (
                    <div key={i} className="carta" onClick={() => this.useCard(i)}>
                        <div className="box-carta" style={{backgroundColor: cor[4]}}>
                            <div className="white-mark">
                                <h3 style={{color: 'black'}}><FontAwesomeIcon icon = {['fab','react']} className="icon" /> </h3>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return(
            <ul>
                {CardListItem}
            </ul>
        );
    }
}