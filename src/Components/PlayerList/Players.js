import React from 'react'
import './PlayerList.css'

export default function Players(props) {

  const handleEdit = () => {
    console.log("edit me")
  }

  return (
    <li className="list-items">
      {props.name} - {props.rating}
      <span className="modify-buttons">
        <button className="edit-delete-button" onClick={handleEdit}>Edit</button>
        <button className="edit-delete-button" onClick={props.onClick}>Delete</button>
      </span>
    </li>
  )
}
