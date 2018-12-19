import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.comprar = this.comprar.bind(this);
    this.state = {
      player1: [],
      player2: [],
      mesa:[0, 0],
    }
  }
  componentDidMount = () => {
    this.setState({
      mesa: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 4),
      ]
    })
  }

  darCartas = () => {
    let player1 = []
    for(let i = 0; i < 7; i++){
      let valor = Math.floor(Math.random() * 10);
      let color = Math.floor(Math.random() * 4);
      player1 = player1.concat([
        [valor, color]
      ])
      console.log(player1);
    }
    let player2 = []
    for(let i = 0; i < 7; i++){
      let valor = Math.floor(Math.random() * 10);
      let color = Math.floor(Math.random() * 4);
      player2 = player2.concat([
        [valor, color]
      ])
      console.log(player2);
    }
    this.setState({
      player1: player1,
      player2: player2,
    })
  }

  comprar = () => {
    let player1 = this.state.player1
    console.log(player1);
    let valor = Math.floor(Math.random() * 10);
    let color = Math.floor(Math.random() * 4);
    player1 = player1.concat([
      [valor, color]
    ])
    this.setState({
      player1: player1,
    })
  }

  checkCarta = i => {
    if(i[0] === this.state.mesa[0] || i[1] === this.state.mesa[1]){
      this.setState({
        mesa: i,
      })
      return true;
    }
    return false;
  }

  remove = i => {
    var array = [...this.state.player1]; // make a separate copy of the array
    var index = array[i];
    if(this.checkCarta(index)){
      index = array.indexOf(index)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({player1: array}, () => this.jogadaOponente());
      }
    }else{
      console.log("carta não aceita");
    }
  }

  jogadaOponente = () => {
    let opo = this.state.player2;
    let len = opo.length;
    for(let i = 0; i < len; i++){
      if(opo[i][0] === this.state.mesa[0] || opo[i][1] === this.state.mesa[1]){
        this.setState({
          mesa: opo[i],
        })
        var array = [...this.state.player2]; // make a separate copy of the array
        var index = array[i];
        index = array.indexOf(index)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({player2: array}, () => console.log(this.state.player2));
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.player1} remove={this.remove} />
        <button onClick={this.darCartas}>Jogar</button>
        <br /><br />
        <Card numero={this.state.mesa[0]} cor={this.state.mesa[1]} />
        <div onClick={this.comprar} className="deck">
        <Card numero={'uno'} cor={4} />
        </div>

        <br /><br /><br />
        <CardList hideCard={this.state.player2} />
      </div>
    );
  }
}

export default App;
