import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Card from './components/Card';
import Modal from './components/Modal';

class App extends Component {
  constructor(props){
    super(props);
    this.comprar = this.comprar.bind(this);
    this.state = {
      player1: [],
      player2: [],
      mesa:[0, 0],
      bloqueado: false,
      showModal: false
    }
  }
  componentDidMount = () => {
    this.setState({
      mesa: [
        Math.floor(Math.random() * 11),
        Math.floor(Math.random() * 4),
      ]
    })
  }

  darCartas = () => {
    let player1 = []
    for(let i = 0; i < 7; i++){
      let valor = Math.floor(Math.random() * 12);
      let color = Math.floor(Math.random() * 4);
      player1 = player1.concat([
        [valor, color]
      ])
    }
    let player2 = []
    for(let i = 0; i < 7; i++){
      let valor = Math.floor(Math.random() * 12);
      let color = Math.floor(Math.random() * 4);
      player2 = player2.concat([
        [valor, color]
      ])
    }
    this.setState({
      player1: player1,
      player2: player2,
    })
  }

  comprar = () => {
    let player1 = this.state.player1
    console.log(player1);
    let valor = Math.floor(Math.random() * 12);
    let color = Math.floor(Math.random() * 4);
    player1 = player1.concat([
      [valor, color]
    ])
    this.setState({
      player1: player1,
    })
  }

  trocarCor = () => {

  }

  checkCarta = i => {
    if(i[0] === this.state.mesa[0] || i[1] === this.state.mesa[1]){
      if(i[0] === 11 && i[1] === 3){
        console.log('pular');
        this.setState({
          mesa: i,
          bloqueado: true
        })
      }else{
        if(i[0] === 11 && i[1] === 1){
          console.log('+2')
          this.setState({
            mesa: i,
            bloqueado: true
          })
        }else{
          this.setState({
            mesa: i,
            bloqueado: false
          })
        }
      }
      return true;
    }else{
      if(i[0] === 11){
        if(i[1] === 0){
          console.log('+4')
          this.setState({
            mesa: i,
            bloqueado: true,
            showModal: true
          })
          return true;
        }else{
          if(i[1] === 2){
            console.log('MUDA COR');
            this.setState({
              mesa: i,
              bloqueado: false,
              showModal: true
            })
            return true;
          }
        }
      }
    }
    return false;
  }

  remove = i => {
    var array = [...this.state.player1];
    var index = array[i];
    if(this.checkCarta(index)){
      index = array.indexOf(index)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({player1: array}, () => {
          if(!this.state.bloqueado){
            this.jogadaOponente()
          }else{
            console.log("continue jogando")
          }
        });
      }
    }else{
      console.log("carta não aceita");
    }
  }

  jogadaOponente = () => {
    let opo = this.state.player2;
    let len = opo.length;
    let comprarCarta = false;
    for(let i = 0; i < len; i++){
      if(opo[i][0] === this.state.mesa[0] || opo[i][1] === this.state.mesa[1]){
        this.setState({
          mesa: opo[i],
        })
        var array = [...this.state.player2];
        var index = array[i];
        index = array.indexOf(index)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({player2: array});
        }
        comprarCarta = false;
        break;
      }else{
        comprarCarta = true;
      }
    }
    if(comprarCarta){
      let player2 = this.state.player2
      let valor = Math.floor(Math.random() * 12);
      let color = Math.floor(Math.random() * 4);
      player2 = player2.concat([
        [valor, color]
      ])
      this.setState({
        player2: player2,
      })   
    }
  }

  closeModal = color => {
    let desk = this.state.mesa;
    desk[0] = this.state.mesa === '+4' ? 12 : 13;
    desk[1] = color;
    this.setState({
      showModal: false,
      mesa: desk
    });
  }

  showModal = () => {
    if(this.state.showModal){
      alert('pause')
      return <Modal title="Escolha qual cor" show={this.closeModal} />
    }
  }

  render() {
    return (
      <div className="App">
        {this.showModal()}
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
