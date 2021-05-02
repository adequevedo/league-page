import React, { useState, useEffect  } from 'react';
// import '../css/localstats.css';
// import data from './data/yearly_stats.json';
var data = require('./data/yearly_stats.json')


const LocalStats = () => {
  var dict = {};

  const listItems = data.map((x) =>
        <li key={x.year}>
          {x.owner}: {x.year}
            <ul>
              <li>Team Name: {x.team_name}</li>
              <li>wins: {x.wins}</li>
              <li>losses: {x.losses}</li>
              <li>Points for: {x.points_for}</li>
              <li>Points against: {x.points_against}</li>
              <li>Regular Season Finish: {x.season_finish}</li>
              <li>Post Season Finish: {x.final_finish}</li>
            </ul>
        </li>
    );

  console.log(dict)
  return (
    <div>
      {listItems}
    </div>
  );
};
export default LocalStats;
