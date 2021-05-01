import React, { useState, useEffect  } from 'react';
// import '../css/localstats.css';
// import data from './data/yearly_stats.json';
var data = require('./data/yearly_stats.json')


const LocalStats = () => {
  var dict = {};
  for(var x in data){
    // console.log(data[x]['owner'])
    // console.log(data[x]['year'])

    // dict.push({
    //   key: dict[data[x]['owner']],
    //   value: data[x]['year']: {
    //           "team_name":data[x]['team_name']
    //           "wins":data[x]['wins'],
    //           "losses":data[x]['losses'],
    //           "points_for":data[x]['points_for'],
    //           "points_against":data[x]['points_against'],
    //           "reg_season_finish":data[x]['season_finish'],
    //           "final_finish":data[x]['final_finish']
    //         }
    // });

    // dict[data[x]['owner']] = {
    //   data[x]['year']: {
    //         "team_name":data[x]['team_name']
    //         "wins":data[x]['wins'],
    //         "losses":data[x]['losses'],
    //         "points_for":data[x]['points_for'],
    //         "points_against":data[x]['points_against'],
    //         "reg_season_finish":data[x]['season_finish'],
    //         "final_finish":data[x]['final_finish']
    //       }
    //     };
  }
  console.log(dict)
  return (
    <div>
      hi
    </div>
  );
};
export default LocalStats;
