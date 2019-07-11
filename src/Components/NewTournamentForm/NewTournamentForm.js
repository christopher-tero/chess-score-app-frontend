import React, {Component} from 'react'
import './NewTournamentForm.css'


export default class NewTournamentForm extends Component {
  render(){
    return(
      <div className="container">
        <h1 id="title-new-tournament">Create New Tournament</h1>
        <p className="under-construction">This Page is Under Construction</p>
        <button className="home" onClick={() => this.props.history.push('/')}>Home</button>
      </div>
    )
  }
}
