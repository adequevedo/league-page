import React, { Component } from 'react';
import '../css/App.css';
import Players from './Players'
import Summary from './Summary'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      </div>
    );
  }
}


export default App;
