import React, {Component} from 'react'
import Tournaments from './Tournaments.js'
import './TournamentHistoryList.css'

export default class TournamentHistoryList extends Component {

  listTournaments = () => this.props.tournaments.map((game) => {
    return <Tournaments key={game.id} date={game.date} />
  })

  render() {
    return(
      <div className="container">
        <h1 id="title-games">Tournaments History</h1>
        <ul>
          {this.props.tournaments
            ? this.listTournaments()
            : ""
          }
        </ul>
        <button className="home" onClick={() => this.props.history.push('/')}>Home</button>
      </div>
    )
  }
}

//        <p className="under-construction">This Page is Under Construction</p>
