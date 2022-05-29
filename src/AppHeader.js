import React, { Component } from 'react';
import Sound from 'react-sound';

import musicFile from './jungleMusic.mp3';

import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <Sound
      url={musicFile}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
        <img src='https://cdn-icons-png.flaticon.com/512/1596/1596810.png' className="App-logo" alt="logo" />
        <h2><b>Welcome to the Animal Hangman Game</b></h2>
        <h3><b>TikTok Youth Camp 2022</b></h3>
        <h4><b>By Skyler, Wan Ying, Christina, Brandon and Biao</b></h4>
        <h4>Instructions: Click on the alphabets to guess the correct word! Find the correct word within 10 tries to win the game.</h4>
      </div>
    );
  }
}

export default AppHeader;
