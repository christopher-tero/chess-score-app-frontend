import React, {Component} from 'react'
import Games from './Games'
import './GameHistoryList.css'

export default class GameHistoryList extends Component {

  listGames = () => this.props.games.map((game) => {
    return <Games key={game.id} date={game.date} />
  })

  render() {
    return(
      <div className="container">
        <h1 id="title-games">Games History</h1>
        <ul>
          {this.props.games
            ? this.listGames()
            : ""
          }
          <li>July 10, 2019: Garry Kasparov(W - 1) vs. Anatoly Karpov(B - 0)</li>
        </ul>
        <button className="home" onClick={() => this.props.history.push('/')}>Home</button>
      </div>
    )
  }
}

// <p className="under-construction">This Page is Under Construction</p>
