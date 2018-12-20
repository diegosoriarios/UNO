import React, {Component} from 'react'
//import Card from './Card';
import '../style/style.css'

const cor = ["#ff6961", "#5d9b9b", "#77dd77", "#fdfd96", "black"]

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
                return (
                    <div key={i} className="carta" onClick={() => this.useCard(i)}>
                        <div className="box-carta" style={{backgroundColor: cor[color]}}>
                            <h3>{numero}</h3>
                        </div>
                    </div>
                );
            });
        }else {
            CardListItem = this.props.hideCard.map((carta, i) => {
                return (
                    <div key={i} className="carta" onClick={() => this.useCard(i)}>
                        <div className="box-carta" style={{backgroundColor: cor[4]}}>
                            <h3>un</h3>
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