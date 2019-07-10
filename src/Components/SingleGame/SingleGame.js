import React, {Component} from 'react'
import './SingleGame.css'
const url = "https://chess-score-app-backend.herokuapp.com/"

export default class SingleGame extends Component {
  constructor() {
    super()

    this.state = {
      playGame: {
        white: undefined,
        black: undefined,
        winner: undefined,
      },
      postPlayerOneGame: {
        player_id: undefined,
        game_id: undefined,
        score: undefined,
      },
      postPlayerTwoGame: {
        player_id: undefined,
        game_id: undefined,
        score: undefined,
      }
    }
  }

  postGames = (newGame) => {
    fetch(url + "games", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGame)
    })
      .then(response => response.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error(error))
  }

  componentDidUpdate = () => {
    console.log(this.state.playGame)
  }

  handleSubmit = (event) => {
    event.preventDefault(event);
    const gameId = Date.now()
    let postPlayerOneGameData = JSON.parse(JSON.stringify(this.state.postPlayerOneGame))
    let postPlayerTwoGameData = JSON.parse(JSON.stringify(this.state.postPlayerTwoGame))
    if (this.state.playGame.winner === "white") {
      postPlayerOneGameData.player_id = this.state.playGame.white
      postPlayerOneGameData.game_id = gameId
      postPlayerOneGameData.score = 1
      this.setState({postGame: postPlayerOneGameData})
      postPlayerTwoGameData.player_id = this.state.playGame.black
      postPlayerTwoGameData.game_id = gameId
      postPlayerTwoGameData.score = 0
      this.setState({postGame: postPlayerTwoGameData })
    } else if (this.state.playGame.winner === "black") {
      postPlayerOneGameData.player_id = this.state.playGame.white
      postPlayerOneGameData.game_id = gameId
      postPlayerOneGameData.score = 0
      this.setState({postGame: postPlayerOneGameData})
      postPlayerTwoGameData.player_id = this.state.playGame.black
      postPlayerTwoGameData.game_id = gameId
      postPlayerTwoGameData.score = 1
      this.setState({postGame: postPlayerTwoGameData })
    } else if (this.state.playGame.winner === "draw") {
      postPlayerOneGameData.player_id = this.state.playGame.white
      postPlayerOneGameData.game_id = gameId
      postPlayerOneGameData.score = 0.5
      this.setState({postGame: postPlayerOneGameData})
      postPlayerTwoGameData.player_id = this.state.playGame.black
      postPlayerTwoGameData.game_id = gameId
      postPlayerTwoGameData.score = 0.5
      this.setState({postGame: postPlayerTwoGameData })
    }
    const newGame = {date: Date.now(), tournament_id: null}
    this.postGames(newGame)
    console.log(newGame)
  }

  handleInputChange = (event) => {
    const {playGame} = {...this.state}
    const currentState = playGame
    const {name, value} = event.target;
    currentState[name] = value;

    this.setState({ playGame: currentState });
  }


  render(){
    return(
      <div className="container">
        <h1 id="title-game">Start Single Game</h1>
        <form id="single-game-form" onSubmit={this.handleSubmit} >
          <input id="white-player" type="text" placeholder="White Player Name" name="white" onChange={this.handleInputChange} required/>
          <input id="black-player" type="text" placeholder="Black Player Name" name="black" onChange={this.handleInputChange} required/>
          <div id="radio-box">
            <div className="radio">
              <label htmlFor="white-win">White wins</label>
              <input type="radio" name="winner" id="white-win" value="white" onChange={this.handleInputChange} />
            </div>
            <div className="radio">
              <label htmlFor="black-win">Black wins</label>
              <input type="radio" name="winner" id="black-win" value="black" onChange={this.handleInputChange} />
            </div>
            <div className="radio">
              <label htmlFor="draw">Draw</label>
              <input type="radio" name="winner" id="draw" value="draw" required onChange={this.handleInputChange} />
            </div>
          </div>
          <input type="submit" id="submit" name="submit" value="Submit Game" />
        </form>
      </div>
    )
  }
}
