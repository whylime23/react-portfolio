import React, { Component } from 'react';
import Home from './Home';
import Simon from './Simon/Simon';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/" component={Home}/>
          <Route path="/simon" component={Simon}/>
        </div>
      </Router>
    );
  }
}

export default App;
