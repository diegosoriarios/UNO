import React, {Component} from 'react'
//import Card from './Card';
import '../style/style.css'

const cor = ["red", "blue", "green", "yellow"]

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
        const CardListItem = this.props.cards.map((carta, i) => {
            return (
                <div key={i} className="carta" onClick={() => this.useCard(i)}>
                    <div className="box-carta" style={{backgroundColor: cor[carta[1]]}}>
                        <h3>{carta[0]}</h3>
                    </div>
                </div>
            );
        });
        return(
            <ul>
                {CardListItem}
            </ul>
        );
    }
}