import React, { Component } from 'react';
import '../css/App.css';
import Players from './Players'
import Summary from './Summary'
import Navbar from './Navbar'
import Home from './Home'
import Records from './Records'
import Stats from './Stats'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <nav>
            <>
            <Navbar />
            </>
          </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/records">
            <Records />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

// function Stats(){
//   return(
//     <h1>Stats</h1>
//   )
// }

export default App;
