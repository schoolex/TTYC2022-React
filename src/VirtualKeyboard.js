import React, { Component, PropTypes } from 'react';
import LettersRow from './LettersRow';
import LetterBlock from './LetterBlock';
import './VirtualKeyboard.css';

class VirtualKeyboard extends Component {
  render() {
    return (
      <div className="VirtualKeyboard">
        <div key="First" className="VirtualKeyboard-FirstRow">
          {this._renderRow(VirtualKeyboard.FIRST_ROW)}
        </div>
        <div key="Second" className="VirtualKeyboard-SecondRow">
          {this._renderRow(VirtualKeyboard.SECOND_ROW)}
        </div>
        <div key="Third" className="VirtualKeyboard-ThirdRow">
          {this._renderRow(VirtualKeyboard.THIRD_ROW)}
        </div>
      </div>
    );
  }

  _renderRow(letters) {
    const children = letters
      .filter(letter => this.props.excluded.indexOf(letter) === -1)
      .map(letter => (
        <LetterBlock
          value={letter}
          onClick={this.props.onClick.bind(null, letter)}
          key={`LetterBlock-${letter}`}
        />
      ));

    return (
      <LettersRow>
        {children}
      </LettersRow>
    );
  }
}

VirtualKeyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
  excluded: PropTypes.arrayOf(PropTypes.string),
};

VirtualKeyboard.defaultProps = {
  excluded: [],
};

VirtualKeyboard.FIRST_ROW = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
VirtualKeyboard.SECOND_ROW = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'];
VirtualKeyboard.THIRD_ROW = ['t', 'u', 'v', 'w', 'x', 'y', 'z'];

export default VirtualKeyboard;
