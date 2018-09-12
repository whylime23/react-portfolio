import React, { Component } from 'react';
import BackButton from '../BackButton/BackButton';
import './Pomodoro.css';
import Bell from './sounds/Bell.wav';

class Pomodoro extends Component {
  state = {
    mode: 'Session',
    isPaused: true,
    sessionSet: 25,
    breakSet: 5,
    sessionTimer: '25',
    breakTimer: '5',
    sessionSecondsLeft: 1500,
    breakSecondsLeft: 300
  };

  countdown = null;

  handlePause = () => {
    this.setState({
      isPaused: !this.state.isPaused
    },
    () => {
      if (this.state.isPaused) {
        clearInterval(this.countdown);
      } else if (!this.state.isPaused) {
        this.countdown = setInterval(this.progressTimer, 1000);
      } else {
        console.error('isPaused not boolean');
      }
    });
  };

  progressTimer = () => {
    if (this.state.mode === 'Session') {
      const newSessionTime = this.state.sessionSecondsLeft - 1;
      if (newSessionTime < 0) {
        this.timerBell();
        this.setState({
          mode: 'Break',
          breakTimer: this.state.breakSet,
          breakSecondsLeft: this.state.breakSet * 60
        });
      } else {
        this.setState({
          sessionSecondsLeft: newSessionTime,
          sessionTimer: `${Math.floor(newSessionTime / 60)}:${newSessionTime % 60 < 10 ? "0" : ""}${Math.floor(newSessionTime % 60)}`
        });
      }
    } else if (this.state.mode === 'Break') {
      const newBreakTime = this.state.breakSecondsLeft - 1;
      if (newBreakTime < 0) {
        this.timerBell();
        this.setState({
          mode: 'Session',
          sessionTimer: this.state.sessionSet,
          sessionSecondsLeft: this.state.sessionSet * 60
        });
      } else {
        this.setState({
          breakSecondsLeft: newBreakTime,
          breakTimer: `${Math.floor(newBreakTime / 60)}:${newBreakTime % 60 < 10 ? "0" : ""}${Math.floor(newBreakTime % 60)}`
        });
      }
    } else {
      console.error('mode is neither session nor break')
    }
  }

  timerBell = () => {
    let audio = new Audio(Bell);
    audio.play();
  }

  handleSession = () => {
    if (this.state.mode === 'Break' && this.state.isPaused) {
      this.setState({
        mode: 'Session',
        sesionTimer: this.state.sessionSet
      });
    }
  };

  handleBreak = () => {
    if (this.state.mode === 'Session' && this.state.isPaused) {
      this.setState({
        mode: 'Break',
        breakTimer: this.state.breakSet
      });
    }
  };

  handleSessionTimerMinus = () => {
    const newSessionSet = this.state.sessionSet - 1;
    if (this.state.sessionSet <2) {
      return;
    }
    if (this.state.mode === 'Session' && this.state.isPaused) {
      this.setState({
        sessionSet: newSessionSet,
        sessionTimer: newSessionSet,
        sessionSecondsLeft: newSessionSet * 60
      });
    } else if (this.state.mode === 'Break') {
      this.setState({
        sessionSet: newSessionSet,
        sessionSecondsLeft: newSessionSet * 60
      });
    }
  };

  handleSessionTimerPlus = () => {
    const newSessionSet = this.state.sessionSet + 1;
    if (this.state.sessionSet >59) {
      return;
    }
    if (this.state.mode === 'Session' && this.state.isPaused) {
      this.setState({
        sessionSet: newSessionSet,
        sessionTimer: newSessionSet,
        sessionSecondsLeft: newSessionSet * 60
      });
    } else if (this.state.mode === 'Break') {
      this.setState({
        sessionSet: newSessionSet,
        sessionSecondsLeft: newSessionSet * 60
      });
    }
  };

  handleBreakTimerMinus = () => {
    const newBreakSet = this.state.breakSet - 1;
    if (this.state.breakSet <2) {
      return;
    }
    if (this.state.mode === 'Break' && this.state.isPaused) {
      this.setState({
        breakSet: newBreakSet,
        breakTimer: newBreakSet,
        breakSecondsLeft: newBreakSet * 60
      });
    } else if (this.state.mode === 'Session') {
      this.setState({
        breakSet: newBreakSet,
        breakSecondsLeft: newBreakSet * 60
      });
    }
  };

  handleBreakTimerPlus = () => {
    const newBreakSet = this.state.breakSet + 1;
    if (this.state.breakSet >59) {
      return;
    }
    if (this.state.mode === 'Break' && this.state.isPaused) {
      this.setState({
        breakSet: newBreakSet,
        breakTimer: newBreakSet,
        breakSecondsLeft: newBreakSet * 60
      });
    } else if (this.state.mode === 'Session') {
      this.setState({
        breakSet: newBreakSet,
        breakSecondsLeft: newBreakSet * 60
      });
    }
  };

  render() {
    return (
      <div className='pomodoro'>
        <BackButton />
        <p className='pom-heading'>Pomodoro Clock</p>
        <div className='appContainer'>

          <div className='clockContainer'>
            <div className='clockBody'>
              <div className='clockType'>
                {this.state.mode}
              </div>
              <div>
                <button className='togglePause' onClick={this.handlePause}>
                  { this.state.isPaused ?
                    <i className="fa-icon fa fa-play-circle fa-3x"></i> :
                    <i className="fa-icon fa fa-pause-circle fa-3x"></i>
                  }
                </button>
              </div>
              <div className='clockTimer'>
                {this.state.mode === 'Session' ? this.state.sessionTimer : this.state.breakTimer}
              </div>
            </div>
          </div>

          <div className='controlsContainer'>
            <div className='pom-controls'>
              <div className='sessionLength'>
                <div>
                  <button className='toggleMode isToggled' onClick={this.handleSession}>Session Length</button>
                </div>
                <div className='timers'>
                  <button className='incrementer' onClick={this.handleSessionTimerMinus}> - </button>
                  {this.state.sessionSet}
                  <button className='incrementer' onClick={this.handleSessionTimerPlus}> + </button>
                </div>
              </div>
              <div className='breakLength'>
                <div>
                  <button className='toggleMode' onClick={this.handleBreak}>Break Length</button>
                </div>
                <div className='timers'>
                  <button className='incrementer' onClick={this.handleBreakTimerMinus}> - </button>
                  {this.state.breakSet}
                  <button className='incrementer' onClick={this.handleBreakTimerPlus}> + </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='pom-footer'>
          Designed and coded by Emily Taylor using Atom, React and Chome dev tools.
        </div>

      </div>
    );
  }
}

export default Pomodoro;
