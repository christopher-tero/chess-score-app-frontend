import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import TopPlayerList from '../TopPlayerList/TopPlayerList'
import './Main.css';
const url = "https://secret-beyond-89883.herokuapp.com/"

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      players: undefined
    }
  }

  componentDidMount = () => {
    fetch(url + "players")
      .then(response => response.json())
      .then(result => this.setState({players: result}))
  }

  topPlayerList = () => {
    console.log(this.state.players)
  }

  render(){
    return(
      <div className="container">
        <Navbar />
        <h1 id="welcome">Welcome to <span className="logo">ScoreIt!</span> Chess!</h1>
        <button id="single-game-button">Single Game</button>
        <button id="tournament-button">Tournament</button>
        <div className="sidebar-stats">
          <p>List of top Players</p>
          {this.state.players
            ? <TopPlayerList players={this.state.players}/>
            : ""
          }
        </div>
        <Footer />
      </div>
    )
  }
}
