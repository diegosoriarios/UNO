import React, {Component} from 'react'
//import Card from './Card';
import '../style/style.css'

const cor = ["red", "blue", "green", "yellow", "black"]

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
                    //ADICIONAR CARTAS PRETAS
                    if(carta[1] % 2 === 0){
                        color = 4
                        numero = carta[1] === 0 ? '+4' : '#';
                    }else{
                        numero = '+2'
                        color = carta[1]
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
                            <h3>uno</h3>
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