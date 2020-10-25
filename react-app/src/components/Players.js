// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }
//
// //...
//
// <ListItemLink href="#simple-list">
//   <ListItemText primary="Spam" />
// </ListItemLink>



import '../css/players.css';
const years = {
  "2014": 
    {"steve Senesi": {"team_name": "Sosa Chamberlain", "owner": "steve Senesi", "wins": 7, "losses": 6, "points_for": 1245.0, "points_against": 1112.0, "season_finish": 4, "final_finish": 2, "scores": [79.0, 102.0, 91.0, 91.0, 81.0, 114.0, 90.0, 75.0, 131.0, 73.0, 99.0, 118.0, 101.0, 85.0, 117.0, 98.0], "mov": [-51.0, 26.0, -3.0, 21.0, -8.0, 56.0, -25.0, -6.0, 52.0, -16.0, 50.0, 14.0, 23.0, 26.0, 28.0, -4.0], "schedule": ["(Mcelwain Sucks We beat you RIP)", "(In Honor of Danny)", "(Alex DeQuevedos #1 Fan)", "(Brandocakes Cum up )", "(Texans Suck  More than FSU)", "(Trench  Sosa)", "(Fuck  ISIS)", "(Season Long Choke)", "(Texans Suck  More than FSU)", "(Trade  Raped)", "(In Honor of Danny)", "(Alex DeQuevedos #1 Fan)", "(Brandocakes Cum up )", "(In Honor of Danny)", "(Mcelwain Sucks We beat you RIP)", "(Trench  Sosa)"]}, 
    "Nicolos DiSano": {"team_name": "Season Long Choke", "owner": "Nicolos DiSano", "wins": 7, "losses": 6, "points_for": 1132.0, "points_against": 1124.0, "season_finish": 7, "final_finish": 7, "scores": [90.0, 85.0, 91.0, 81.0, 111.0, 84.0, 84.0, 81.0, 80.0, 94.0, 92.0, 68.0, 91.0, 70.0, 91.0, 122.0], "mov": [15.0, -4.0, 15.0, -36.0, 10.0, -10.0, -2.0, 6.0, 17.0, -8.0, 15.0, -19.0, 9.0, -26.0, 12.0, 63.0], "schedule": ["(Fuck  ISIS)", "(Mcelwain Sucks We beat you RIP)", "(In Honor of Danny)", "(Trench  Sosa)", "(Trade  Raped)", "(Texans Suck  More than FSU)", "(Alex DeQuevedos #1 Fan)", "(Sosa Chamberlain)", "(Fuck  ISIS)", "(Mcelwain Sucks We beat you RIP)", "(Brandocakes Cum up )", "(Trench  Sosa)", "(Trade  Raped)", "(Fuck  ISIS)", "(Brandocakes Cum up )", "(Texans Suck  More than FSU)"]}
    },
  "2015": 
      {"Garrett Olesh": {"team_name": "Team Olesh", "owner": "Garrett Olesh", "wins": 3, "losses": 10, "points_for": 1083.0, "points_against": 1239.0, "season_finish": 9, "final_finish": 9, "scores": [68.0, 110.0, 65.0, 68.0, 66.0, 87.0, 68.0, 89.0, 82.0, 131.0, 89.0, 101.0, 59.0, 143.0, 132.0], "mov": [-37.0, 31.0, -69.0, -38.0, 32.0, -6.0, -41.0, -15.0, -34.0, 70.0, -5.0, -6.0, -38.0, -5.0, 42.0], "schedule": ["(Wes Welkers Supplier)", "(Beats by  Ray)", "(Frankie V)", "(Mrs. Van Glahn Is a Cunt)", "(Comeback Kid)", "(Danny's Beard)", "(Fuck  ISIS)", "(Team Rayburn)", "(Jason  Deroche)", "(Wes Welkers Supplier)", "(Beats by  Ray)", "(Frankie V)", "(Mrs. Van Glahn Is a Cunt)", "(Wes Welkers Supplier)", "(Comeback Kid)"]},
      "Danny Kennell": {"team_name": "Fuck  ISIS", "owner": "Danny Kennell", "wins": 2, "losses": 11, "points_for": 975.0, "points_against": 1153.0, "season_finish": 10, "final_finish": 9, "scores": [75.0, 65.0, 79.0, 87.0, 112.0, 66.0, 115.0, 69.0, 63.0, 48.0, 52.0, 76.0, 68.0, 96.0, 67.0, 96.0], "mov": [-15.0, -24.0, -1.0, -7.0, -3.0, 16.0, 25.0, -18.0, -17.0, -71.0, -51.0, -4.0, -8.0, 26.0, -28.0, 8.0], "schedule": ["(Season Long Choke)", "(Trench  Sosa)", "(Trade  Raped)", "(Texans Suck  More than FSU)", "(Mcelwain Sucks We beat you RIP)", "(Alex DeQuevedos #1 Fan)", "(Sosa Chamberlain)", "(Brandocakes Cum up )", "(Season Long Choke)", "(Trench  Sosa)", "(Trade  Raped)", "(In Honor of Danny)", "(Mcelwain Sucks We beat you RIP)", "(Season Long Choke)", "(Texans Suck  More than FSU)", "(Brandocakes Cum up )"]}
      }
};

const year = "2014";
const owner = "Danny Kennell"
  
const Players = () => (
    
  <ul>
    {years.map(player => (
      <li key={player.year.owner.team_name}>
        <div>{player.year.owner.team_name}</div>
        // <div>{player.year.owner.firstname}</div>
        // <div>{player.year.owner.lastname}</div>
        // <div>{player.year.owner.year}</div>
      </li>
    ))}
  </ul>
);

    


export default Players;
