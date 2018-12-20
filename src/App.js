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
      jogadorBlock: false,
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
      //let valor = Math.floor(Math.random() * 12);
      let color = Math.floor(Math.random() * 4);
      let valor = 11;
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
    let valor = Math.floor(Math.random() * 12);
    let color = Math.floor(Math.random() * 4);
    player1 = player1.concat([
      [valor, color]
    ])
    this.setState({
      player1: player1,
    }, () => {
      this.jogadaOponente();
    })
  }

  compraMaisCartas = (v, player) => {
    if(player === 1){
      let player1 = this.state.player1
      for(let i = 0; i < v; i++){
        let valor = Math.floor(Math.random() * 12);
        let color = Math.floor(Math.random() * 4);
        player1 = player1.concat([
          [valor, color]
        ])
      }
      this.setState({
        player1: player1,
      })
    }else{
      let player2 = this.state.player2
      for(let i = 0; i < v; i++){
        let valor = Math.floor(Math.random() * 12);
        let color = Math.floor(Math.random() * 4);
        player2 = player2.concat([
          [valor, color]
        ])
      }
      this.setState({
        player2: player2,
      })
    }
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
          }, () =>{
            this.compraMaisCartas(2, 2);
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
          }, () => {
            this.compraMaisCartas(4, 2);
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
    //loop pelas cartas do oponente
    for(let i = 0; i < len; i++){
      //se a carta for da mesma cor ou do mesmo numero
      if(opo[i][0] === this.state.mesa[0] || opo[i][1] === this.state.mesa[1]){
        if(opo[i][0] === 11 && opo[i][1] === 3){
          console.log('pular');
          this.setState({
            mesa: opo[i],
            jogadorBlock: true
          })
        }else{
          if(opo[i][0] === 11 && opo[i][1] === 1){
            console.log('+2')
            this.setState({
              mesa: opo[i],
              jogadorBlock: true
            }, () =>{
              this.compraMaisCartas(2, 1);
            })
          }
        }
        var array = [...this.state.player2];
        var index = array[i];
        index = array.indexOf(index)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({player2: array});
        }
        comprarCarta = false;
        this.setState({
          mesa: opo[i],
        })
        break;
      }else{
        if(opo[i][0] === 11 && opo[i][1] === 0){
          console.log('+4')
          array = [...this.state.player2];
          index = array[i];
          index = array.indexOf(index)
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({player2: array});
          }
          comprarCarta = false;
          this.setState({
            mesa: opo[i],
            jogadorBlock: true,
          }, () => {
            this.compraMaisCartas(4, 1);
            let rand = Math.floor() * 4;
            this.closeModal(rand);
          })
          break;
        }else{
          if(opo[i][0] === 11 && opo[i][1] === 2){
            console.log('MUDA COR');
            array = [...this.state.player2];
            index = array[i];
            index = array.indexOf(index)
            if (index !== -1) {
              array.splice(index, 1);
              this.setState({player2: array});
            }
            comprarCarta = false;
            let rand = Math.floor(Math.random() * 4);
            this.setState({
              mesa: opo[i],
              bloqueado: false,
            }, () => {
              this.closeModal(rand);
            })
            break;
          }else{
            comprarCarta = true;
          }
        }
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
    if(this.state.jogadorBlock){
      this.jogadaOponente();
    }
  }

  closeModal = color => {
    console.log(color);
    console.log(this.state.mesa);
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
          <Card numero={'un'} cor={4} />
        </div>

        <br /><br /><br />
        
        <CardList hideCard={this.state.player2} />
      </div>
    );
  }
}

export default App;
