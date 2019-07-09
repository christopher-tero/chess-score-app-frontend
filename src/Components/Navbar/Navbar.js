import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return(
    <div className="header">
      <h4 className="title"><span className="logo">ScoreIt!</span> Chess</h4>
      <div className="nav-links">
        <span>Players</span>
        <span>Past Games</span>
        <span>Past Tournament</span>
      </div>
    </div>
  )
}
