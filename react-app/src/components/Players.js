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

function Players() {

  const names = ["Alex", "Zach", "Frank"];
  return (
    <div>
    {names.map((name, index) => (
      <li key={index}>
      {name}
      </li>
    ))}
    </div>
  );

}

export default Players;
