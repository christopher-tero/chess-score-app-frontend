import React, {Component} from 'react'
import Players from './Players'
import './PlayerList.css'

export default class PlayerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player_name: this.props.editedPlayer.player_name,
      rating: this.props.editedPlayer.rating,
      editView: this.props.editView,
    }
  }

  listPlayers = () => this.props.players.map((player) => {
    return <Players key={player.id}
      id={player.id}
      name={player.player_name}
      rating={player.rating}
      onClick={() => this.handleDelete(player.id)}
      editClick={() => this.handleEdit(player.id)}
    />
  })

  handleDelete = (id) => {
    this.props.delete(id)
  }

  handleEdit = (id) => {
    this.props.setEditState()
    const player = this.props.players.find(player => player.id == id)
    this.props.setEditedPlayer(player)
    // console.log(this.state)
  }

  addPlayer = (event) => {
    event.preventDefault(event)
    const newPlayer = {
      player_name: event.target.playerName.value,
      rating: event.target.playerRating.value
    }
    this.props.addPerson(newPlayer)
  }

  editPlayer = (event) => {
    event.preventDefault(event)
    const editPlayer = {
      player_name: this.state.player_name,
      rating: this.state.rating,
    }
    this.props.editPlayer(editPlayer)
    this.props.setEditState()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
          <input type="text" placeholder="Player Name" name="playerName" required />
          <input type="text" placeholder="Player Rating" name="playerRating" required />
          <input type="submit" />
        </form>
        { this.state.editView
          ?
            <form id="edit-player" onSubmit={this.editPlayer}>
              <h5>Edit Player</h5>
              <input
                type="text"
                onChange={(event) => this.handleChange(event)}
                value={this.state.player_name}
                placeholder={this.props.editedPlayer.player_name}
                name="player_name"
                required
              />
              <input
                type="text"
                onChange={(event) => this.handleChange(event)}
                value={this.state.rating}
                placeholder={this.props.editedPlayer.rating}
                name="rating"
                required
              />
              <input type="submit" />
            </form>
          : ""
        }
      </div>
    )
  }

}
