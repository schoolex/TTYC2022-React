import React, { Component } from 'react';

import './AppFooter.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
        <h5>Animals Guessed</h5>
        <ul>
          {
           this.props.correctGuesses.map((animal, i)=> {
            return <li key={i}>{animal}</li>
           })
         }
        </ul>
      </div>
    );
  }
}

export default AppFooter;
