import React from 'react'

const PlayerCard = (props) => {
  return (
    <div className="player-card">
      <figure className="player-card-front">
        <img alt={props.name} src={props.img}/>
        <div className="player-card-name">
          <h1>{props.name} | {props.role}</h1>
        </div>
      </figure>
      <figure className="player-card-back">
        <h1>Stats for {props.name}</h1>
        <ul className="player-stats">
          <li>Kills - {props.kills}</li>
          <li>Assists - {props.assists}</li>
          <li>Gold - {props.gold}</li>
          <li>Damage - {props.damage}</li>
          <li>Main - {props.main}</li>
        </ul>
      </figure>
    </div>
  )
}

export default PlayerCard
