import React, {Component} from 'react'
import Players from './Players'
import './PlayerList.css'

export default class PlayerList extends Component {

  listPlayers = () => this.props.players.map((player) => {
    return <Players key={player.id} id={player.id} name={player.player_name} rating={player.rating} onClick={() => this.handleDelete(player.id)}/>
  })

  handleDelete = (id) => {
    this.props.delete(id)
  }

  addPlayer = (event) => {
    event.preventDefault(event)
    const newPlayer = {
      player_name: event.target.playerName.value,
      rating: event.target.playerRating.value
    }
    this.props.addPerson(newPlayer)
  }

  render(){
    return(
      <div className="container">
        <h1 id="title-players">Players</h1>
        <ul id="player-list">
          {this.props.players
            ? this.listPlayers()
            : ""
          }
        </ul>
        <form id="new-player" onSubmit={this.addPlayer}>
          <h5>New Player</h5>
          <input type="text" placeholder="Player Name" name="playerName" />
          <input type="text" placeholder="Player Rating" name="playerRating" />
          <input type="submit" />
        </form>
      </div>
    )
  }

}
