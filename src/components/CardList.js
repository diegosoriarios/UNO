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
        let CardListItem
        if(this.props.cards){
            CardListItem = this.props.cards.map((carta, i) => {
                return (
                    <div key={i} className="carta" onClick={() => this.useCard(i)}>
                        <div className="box-carta" style={{backgroundColor: cor[carta[1]]}}>
                            <h3>{carta[0]}</h3>
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