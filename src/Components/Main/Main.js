import React, {Component} from 'react'
import TopPlayerList from '../TopPlayerList/TopPlayerList'
import './Main.css';
const url = "https://chess-score-app-backend.herokuapp.com/"

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

  singleGamePath = () => {
    return this.props.history.push('/new-game/');
  }

  tournamentPath = () => {
        return this.props.history.push('/new-tournament/');
  }

  render(){
    return(
      <div className="container">

        <h1 id="welcome">Welcome to <span className="logo">ScoreIt!</span> Chess!</h1>
          <button className="main-button" id="single-game-button" onClick={this.singleGamePath}>
            New Game
          </button>
          <button className="main-button" id="tournament-button" onClick={this.tournamentPath}>
            Tournament
          </button>
        <div className="sidebar-stats">
          <h5>List of Top Players</h5>
          {this.state.players
            ? <TopPlayerList players={this.state.players}/>
            : ""
          }
        </div>
      </div>
    )
  }
}

// render={(props) => <TodoForm {...props} postTodo={this.postTodos}
