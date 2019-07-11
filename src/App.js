import React, {Component} from 'react';
import Main from './Components/Main/Main'
import PlayerList from './Components/PlayerList/PlayerList'
import GameHistoryList from './Components/GameHistoryList/GameHistoryList'
import TournamentHistoryList from './Components/TournamentHistoryList/TournamentHistoryList'
import SingleGame from './Components/SingleGame/SingleGame'
import NewTournamentForm from './Components/NewTournamentForm/NewTournamentForm'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
const url = "https://chess-score-app-backend.herokuapp.com/"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      players:undefined,
      tournaments: undefined,
      games: [{id: 1, date: "1-1-11"}, {id: 2, date: "1-2-11"}],
      editedPlayer: {},
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    fetch(url + "players")
      .then(response => response.json())
      .then(result => this.setState({players: result}))
    fetch(url + "tournaments")
      .then(response => response.json())
      .then(result => this.setState({tournaments: result}))
    fetch(url + "games")
      .then(response => response.json())
      .then(result => this.setState({games: result}))
  }

  addPerson = (newPlayer) => {
    fetch(url + "players", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlayer)
    })
      .then(response => response.json())
      .then(this.fetchData)
  }

  editPerson = (editPlayer, id) => {
    fetch(url + "players/" + id, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editPlayer)
    })
      .then(response => response.json())
      .then(this.fetchData)
  }

  setEditedPlayer = (player) => {
    this.state.editedPlayer = player
    console.log(player)
  }

  deletePerson = (id) => {
    const filteredPlayers = this.state.players.filter(player => player.id != id)
    this.setState({players: filteredPlayers})
    fetch(url + "players/" + id, {method: "DELETE"})
  }

  render() {
    return (
      <Router>
        <nav className="header">
          <h4 className="title"><span className="logo">ScoreIt!</span> Chess</h4>
          <div className="nav-links">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/players/">Players</Link></span>
            <span><Link to="/past-games/">Past Games</Link></span>
            <span><Link to="/past-tournaments/">Past Tournament</Link></span>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/players/" component={(props) => <PlayerList {...props} players={this.state.players} delete={this.deletePerson} addPerson={this.addPerson} setEditedPlayer={this.setEditedPlayer}/>} editedPlayer={this.state.editedPlayer}/>
          <Route path="/past-games/" component={(props) => <GameHistoryList {...props} games={this.state.games} hello="hello" />} />
          <Route path="/past-tournaments/" component={TournamentHistoryList} />
          <Route path="/new-game/" component={SingleGame} />
          <Route path="/new-tournament/" component={NewTournamentForm} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

// <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// />
