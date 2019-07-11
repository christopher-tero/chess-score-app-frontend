import React from 'react'
import './TopPlayerList.css'

export default function TopPlayerList(props) {
  const sortPlayers = props.players.sort((a, b) => (a.rating < b.rating) ? 1 : -1)

  const listPlayers = sortPlayers.slice(0, 5).map((player) => {
    return (
      <li key={player.id}>{player.player_name} - {player.rating}</li>
    )
  })

  return(
    <ol>
      {listPlayers}
    </ol>
  )
}
