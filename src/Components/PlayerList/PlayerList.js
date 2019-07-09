import React from 'react'

export default function PlayerList(props) {
  const listPlayers = props.players.map((player) => {
    console.log(player.player_name)
    return (
      <li>{player.player_name}</li>
    )
  })

  return(
    <ul>
      {listPlayers}
    </ul>
  )
}
