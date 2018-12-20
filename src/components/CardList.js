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
                            <h3>JS</h3>
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