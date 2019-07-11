import React, {Component} from 'react'
import './SingleGame.css'
const url = "https://chess-score-app-backend.herokuapp.com/"

export default class SingleGame extends Component {
  constructor() {
    super()

    this.state = {
      playGame: {
        date: undefined,
        white: undefined,
        black: undefined,
        winner: undefined,
      },
      postPlayerOneGame: {
        player: undefined,
        game: undefined,
        score: undefined,
      },
      postPlayerTwoGame: {
        player: undefined,
        game: undefined,
        score: undefined,
      }
    }
  }

  postGames = (newGame) => {
    fetch(url + "player_games", {
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
      postPlayerOneGameData.player = this.state.playGame.white
      postPlayerOneGameData.game = gameId
      postPlayerOneGameData.score = 1
      this.setState({postPlayerOneGame: postPlayerOneGameData})
      postPlayerTwoGameData.player = this.state.playGame.black
      postPlayerTwoGameData.game = gameId
      postPlayerTwoGameData.score = 0
      this.setState({postPlayerTwoGame: postPlayerTwoGameData })
    } else if (this.state.playGame.winner === "black") {
      postPlayerOneGameData.player = this.state.playGame.white
      postPlayerOneGameData.game = gameId
      postPlayerOneGameData.score = 0
      this.setState({postPlayerOneGame: postPlayerOneGameData})
      postPlayerTwoGameData.player = this.state.playGame.black
      postPlayerTwoGameData.game = gameId
      postPlayerTwoGameData.score = 1
      this.setState({postPlayerTwoGame: postPlayerTwoGameData })
    } else if (this.state.playGame.winner === "draw") {
      postPlayerOneGameData.player = this.state.playGame.white
      postPlayerOneGameData.game = gameId
      postPlayerOneGameData.score = 0.5
      this.setState({postPlayerOneGame: postPlayerOneGameData})
      postPlayerTwoGameData.player = this.state.playGame.black
      postPlayerTwoGameData.game = gameId
      postPlayerTwoGameData.score = 0.5
      this.setState({postPlayerTwoGame: postPlayerTwoGameData })
    }
    // if (this.state.postPlayerOneGame) {
    //   return this.postGames(postPlayerOneGameData)
    // } else return ""
    window.alert("Minor problem posting; check console log to see all passed info")
    return this.props.history.push('/');
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
