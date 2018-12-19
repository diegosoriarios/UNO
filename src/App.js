import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
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

  checkCarta = i => {
    if(i[0] === this.state.mesa[0] || i[1] === this.state.mesa[1]){
      this.setState({
        mesa: i,
      })
      return true;
    }
    return false;
  }

  remove = (i) => {
    var array = [...this.state.player1]; // make a separate copy of the array
    var index = array[i];
    if(this.checkCarta(index)){
      index = array.indexOf(index)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({player1: array}, () => console.log(this.state.player1));
      }
    }else{
      alert("carta não aceita");
    }
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.player1} remove={this.remove} />
        <button onClick={this.darCartas}>Jogar</button>
        <br /><br />
        <Card numero={this.state.mesa[0]} cor={this.state.mesa[1]} />
      </div>
    );
  }
}

export default App;
