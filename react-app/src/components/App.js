import React, { Component } from 'react';
import '../css/App.css';
import Players from './Players'
import Summary from './Summary'

class App extends Component {
  render() {
    const teams = ["t1", "t2"]
    return (
      <div className="App">
      <Summary name="Alex" wins="12" losses="1" teamNames={teams}/>
      </div>
    );
  }
}


export default App;
