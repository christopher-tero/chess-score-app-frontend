import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Main.css';

export default class Main extends Component {
  render(){
    return(
      <div className="container">
        <Navbar />
        <h1 id="welcome">Welcome to <span className="logo">ScoreIt!</span> Chess!</h1>
        <Footer />
      </div>
    )
  }
}
