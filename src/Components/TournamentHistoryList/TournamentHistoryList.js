import React, {Component} from 'react'
import './TournamentHistoryList.css'

export default class TournamentHistoryList extends Component {

  render() {
    return(
      <div className="container">
        <h1 id="title-tournaments">Tournament History</h1>
        <p className="under-construction">This Page is Under Construction</p>
        <button className="home" onClick={() => this.props.history.push('/')}>Home</button>
      </div>
    )
  }
}
