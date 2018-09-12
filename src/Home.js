import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './Home.css';

import emilyPhoto from './images/emilyPhoto.JPG';
import calculator from './images/calculator.jpg';
import pomodoroClock from './images/pomodoroClock.jpg';
import quoteMachine from './images/quoteMachine.jpg';
import twitchTV from './images/twitchTV.jpg';
import weatherApp from './images/weatherApp.jpg';
import wikipediaViewer from './images/wikipediaViewer.jpg';
import ticTacToe from './images/ticTacToe.jpg';
import simonGame from './images/simonGame.jpg';
import recipeShelf from './images/recipeShelf.jpg';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='Paper paper-effect'>
          <div className='Content'>
            <div className='About-Me'>
              <div>
                <h1 className='initial-heading'>Emily Jane Taylor</h1>
                <p>A self-taught front-end developer with a background in primary education and editing. </p>
                <p className='ul-heading'>Has completed:</p>
                <ul>
                  <li><b>FreeCodeCamp's Front End Development Certification</b></li>
                  <li><b>Udemy's React 16 - A Complete Guide Certification</b> (React components)</li>
                </ul>
                <p>Proficient at using Javascript, React, CSS, Bootstrap and HTML, with experience in Git.</p>
                <p>Hard working and enthusiastic with strong attention to detail and a desire to learn.</p>

              </div>
              <div className='emily-photo-div'>
                <img className='emily-photo' src={emilyPhoto} alt='Emily Taylor' />
                <div className='links'>
                  <a href="http://www.linkedin.com/in/emilytaylor23" target="_blank"><i className='fa fa-linkedin fa-lg'></i></a>
                  <a href="http://www.freecodecamp.com/whylime23" target="_blank"><i className='fa fa-free-code-camp fa-lg'></i></a>
                  <a href="http://www.github.com/whylime23" target="_blank"><i className='fa fa-github fa-lg'></i></a>
                </div>
              </div>

            </div>
            <div>
              <h1 className='portfolio-heading'>Portfolio</h1>

              <h2>Independent Projects</h2>
              <div className='Portfolio'>
                <a href="http://www.recipeshelf.com.au" target="blank"><img className='screenshot-important' src={recipeShelf} alt='Recipe Shelf' /></a>
                <div className='screenshot-desc'>
                  <p className='caption'>Working collaboratively to rebuild the existing website in React.</p>
                </div>
              </div>

              <h2>FreeCodeCamp Projects</h2>
              <div className='Portfolio'>
                <Link to="/simon" className="screenshot-linked"><img className='screenshot' src={simonGame} alt='Simon Game' /></Link>
                {/* <a href="https://github.com/whylime23/simon-game" target="_blank" className="screenshot-linked"><img className='screenshot' src={simonGame} alt='Simon Game' /></a> */}
                <Link to="/tictactoe" className="screenshot-linked"><img className='screenshot' src={ticTacToe} alt='Tic-Tac-Toe' /></Link>
                {/* <a href="https://github.com/whylime23/tic-tac-toe" target="_blank" className="screenshot-linked"><img className='screenshot' src={ticTacToe} alt='Tic-tac-toe' /></a> */}
                <Link to="/pomodoro" className="screenshot-linked"><img className='screenshot' src={pomodoroClock} alt='Pomodoro Clock' /></Link>
                {/* <a href="https://github.com/whylime23/pomodoro-clock" target="_blank" className="screenshot-linked"><img className='screenshot' src={pomodoroClock} alt='Pomodoro Clock' /></a> */}
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

export default Home;
