import React, { Component } from 'react';

function Summary(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>Record: {props.wins} - {props.losses}</p>
    <p>Win %: {(parseInt(props.wins)/(parseInt(props.wins) + parseInt(props.losses))).toFixed(4)}</p>
    <p>Points For: {props.pointsFor}</p>
    <p>Points Against: {props.pointsAgainst}</p>
    <p>Team Names: </p>
      {props.teamNames.map(name => (
        <li>
          {name}
        </li>
      ))}

    </div>
  );
}

export default Summary;
