import React, { Component } from 'react';
import Home from './Home';
import Simon from './Simon/Simon';
import TicTacToe from './TicTacToe/TicTacToe';
import Pomodoro from './Pomodoro/Pomodoro';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/" component={Home} />
          <Route path="/simon" component={Simon} />
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/pomodoro" component={Pomodoro} />
        </div>
      </Router>
    );
  }
}

export default App;
