import React, { Component } from 'react';
import './App.css';

import emilyPhoto from './images/emilyPhoto.png';
import calculator from './images/calculator.PNG';
import henryNavarre from './images/henryNavarre.PNG';
import pomodoroClock from './images/pomodoroClock.PNG';
import quoteMachine from './images/quoteMachine.PNG';
import twitchTV from './images/twitchTV.PNG';
import weatherApp from './images/weatherApp.PNG';
import wikipediaViewer from './images/wikipediaViewer.PNG';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Paper paper-effect'>
          <div className='Content'>
            <div className='About-Me'>
              <div>
                <h1 className='initial-heading'>Emily Taylor</h1>
                <p>A self-taught front-end developer with a background in primary education and editing. Has completed FreeCodeCamp's Front End Development Certification.</p>
                <p>Experience with HTML, CSS and Javascript, as well as React and Bootstrap. Hard working and enthusiastic with strong attention to detail and a desire to learn.</p>
                <div className='links'>
                  <i className='fa fa-linkedin fa-lg'></i>
                  <i className='fa fa-free-code-camp fa-lg'></i>
                  <i className='fa fa-github fa-lg'></i>
                </div>
              </div>
              <img className='emily-photo' src={emilyPhoto} alt='Emily Taylor' />
            </div>
            <div>
              <h1 className='portfolio-heading'>Portfolio</h1>
              <h2>Independent Projects</h2>
              <div className='Portfolio'>
                {/* Independent Project Screenshots Here */}
              </div>
              <h2>FreeCodeCamp Projects</h2>
              <div className='Portfolio'>
                <img className='screenshot' src={pomodoroClock} alt='Pomodoro Clock' />
                <img className='screenshot' src={calculator} alt='Javascript Calculator' />
                <img className='screenshot' src={twitchTV} alt='TwitchTV Streamer' />
                <img className='screenshot' src={wikipediaViewer} alt='Wikipedia Viewer' />
                <img className='screenshot' src={weatherApp} alt='Local Weather App' />
                <img className='screenshot' src={quoteMachine} alt='Random Quote Machine' />
                <img className='screenshot' src={henryNavarre} alt='Henry Navarre Biography' />
              </div>
            </div>
          </div>
        </div>
        <div className='Footer'>
          Designed and coded by &nbsp;<a
            className='emily-link'
            href='https://www.freecodecamp.com/whylime23'
            target='_blank'>Emily Taylor</a>&nbsp; using Atom, React and Chrome dev tools. Background image by Victor Santos at Pexels.
        </div>
      </div>
    );
  }
}

export default App;
