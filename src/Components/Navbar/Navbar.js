import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return(
    <div className="header">
      <h4 className="title"><span className="logo">ScoreIt!</span> Chess</h4>
      <div className="nav-links">
        <span><a href="">Players</a></span>
        <span><a href="">Past Games</a></span>
        <span><a href="">Past Tournament</a></span>
      </div>
    </div>
  )
}
