import React, { Component } from 'react';

function Summary(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>Record: {props.wins} - {props.losses}</p>
    <p>Win %: {props.wins / (props.wins + props.losses)}</p>
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
