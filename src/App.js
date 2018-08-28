import React, { Component } from 'react';
import './App.css';

import emilyPhoto from './images/emilyPhoto.png';
import calculator from './images/calculator.PNG';
import pomodoroClock from './images/pomodoroClock.PNG';
import quoteMachine from './images/quoteMachine.PNG';
import twitchTV from './images/twitchTV.PNG';
import weatherApp from './images/weatherApp.PNG';
import wikipediaViewer from './images/wikipediaViewer.PNG';
import ticTacToe from './images/ticTacToe.PNG';
import simonGame from './images/simonGame.PNG';
import recipeShelf from './images/recipeShelf.PNG';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Paper paper-effect'>
          <div className='Content'>
            <div className='About-Me'>
              <div>
                <h1 className='initial-heading'>Emily Jane Taylor</h1>
                <p>A self-taught front-end developer with a background in primary education and editing. </p>
                <p>Has completed <b>FreeCodeCamp's Front End Development</b> certification and the React components of <b>Udemy's React 16 - A Complete Guide</b> certification.</p>
                <p>Proficient at using Javascript, React, CSS, Bootstrap and HTML and with experience in Git.</p>
                <p>Hard working and enthusiastic with strong attention to detail and a desire to learn.</p>
                <div className='links'>
                  <a href="http://www.linkedin.com/in/emilytaylor23" target="_blank"><i className='fa fa-linkedin fa-lg'></i></a>
                  <a href="http://www.freecodecamp.com/whylime23" target="_blank"><i className='fa fa-free-code-camp fa-lg'></i></a>
                  <a href="http://www.github.com/whylime23" target="_blank"><i className='fa fa-github fa-lg'></i></a>
                </div>
              </div>
              <img className='emily-photo' src={emilyPhoto} alt='Emily Taylor' />
            </div>
            <div>
              <h1 className='portfolio-heading'>Portfolio</h1>

              <h2>Independent Projects</h2>
              <div className='Portfolio'>
                <a href="http://www.recipeshelf.com.au" target="blank"><img className='screenshot-important' src={recipeShelf} alt='Recipe Shelf' /></a>
                <div className='screenshot-desc'>
                  Working collaboratively to rebuild the existing website in React.
                  </div>
              </div>

              <h2>FreeCodeCamp Projects</h2>
              <div className='Portfolio'>
                <a href="https://github.com/whylime23/simon-game" target="_blank" className="screenshot-linked"><img className='screenshot' src={simonGame} alt='Simon Game' /></a>
                <a href="https://github.com/whylime23/tic-tac-toe" target="_blank" className="screenshot-linked"><img className='screenshot' src={ticTacToe} alt='Tic-tac-toe' /></a>
                <a href="https://github.com/whylime23/pomodoro-clock" target="_blank" className="screenshot-linked"><img className='screenshot' src={pomodoroClock} alt='Pomodoro Clock' /></a>
                <a href="https://codepen.io/whylime23/full/NYwgMy/" target="_blank" className="screenshot-linked"><img className='screenshot' src={calculator} alt='Javascript Calculator' /></a>
                <a href="https://codepen.io/whylime23/full/vJPJWm/" target="_blank" className="screenshot-linked"><img className='screenshot' src={twitchTV} alt='TwitchTV Streamer' /></a>
                <a href="https://codepen.io/whylime23/full/MvPWMK/" target="_blank" className="screenshot-linked"><img className='screenshot' src={wikipediaViewer} alt='Wikipedia Viewer' /></a>
                <a href="https://codepen.io/whylime23/full/OjEPGO/" target="_blank" className="screenshot-linked"><img className='screenshot' src={weatherApp} alt='Local Weather App' /></a>
                <a href="https://codepen.io/whylime23/full/PKJqbG/" target="_blank" className="screenshot-linked"><img className='screenshot' src={quoteMachine} alt='Random Quote Machine' /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='Footer'>
          Designed and coded by Emily Taylor using Atom, React and Chrome dev tools. Background image by Victor Santos at Pexels.
        </div>
      </div>
    );
  }
}

export default App;
