import React, { Component, PropTypes } from 'react';

const styles = {
  character: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 3,
  },
  post: {
    fill: 'none',
    stroke:'rgb(255,0,0)', 
    strokeWidth: 10,
  },
};

class Hangman extends Component {
  render() {
    return (
      <svg width="500" height="550">
        {this.renderBase()}
        {this.renderVerticalStand()}
        {this.renderHorizontalStand()}
        {this.renderShortVerticalStand()}
        {this.renderBody()}
        {this.renderLeftArm()}
        {this.renderRightArm()}
        {this.renderLeftLeg()}
        {this.renderRightLeg()}
        {this.renderHead()}
      </svg>
    );
  }

  renderBase() {
    return this.props.base
      ? <line x1="400" y1="500" x2="100" y2="500" style={styles.character} />
      : null;
  }

  renderVerticalStand() {
    return this.props.verticalStand
      ? <line x1="150" y1="500" x2="150" y2="100" style={styles.character} />
      : null;
  }

  renderShortVerticalStand() {
    return this.props.shortVerticalStand
      ? <line x1="320" y1="100" x2="320" y2="150" style={styles.character} />
      : null;
  }

  renderHorizontalStand() {
    return this.props.horizontalStand
      ? <line x1="150" y1="100" x2="320" y2="100" style={styles.character} />
      : null;
  }

  renderHead() {
    return this.props.head
        ? <circle cx="320" cy="190" r="40" fill="black" />
        : null;
  }

  renderBody() {
    return this.props.body
      ? <line x1="320" y1="190" x2="320" y2="360" style={styles.character} />
      : null;
  }

  renderLeftArm() {
    return this.props.leftArm
      ? <line x1="320" y1="260" x2="250" y2="230" style={styles.character} />
      : null;
  }

  renderRightArm() {
    return this.props.rightArm
      ? <line x1="320" y1="260" x2="390" y2="230" style={styles.character} />
      : null;
  }

  renderLeftLeg() {
    return this.props.leftLeg
      ? <line x1="320" y1="360" x2="250" y2="450" style={styles.character} />
      : null;
  }

  renderRightLeg() {
    return this.props.rightLeg
      ? <line x1="320" y1="360" x2="390" y2="450" style={styles.character} />
      : null;
  }
}

Hangman.propTypes = {
  base: PropTypes.bool,
  verticalStand: PropTypes.bool,
  horizontalStand: PropTypes.bools,
  shortVerticalStand: PropTypes.bools,
  head: PropTypes.bool,
  body: PropTypes.bool,
  leftArm: PropTypes.bool,
  rightArm: PropTypes.bool,
  leftLeg: PropTypes.bool,
  rightLeg: PropTypes.bool,
};

Hangman.defaultProps = {
  base: false,
  verticalStand: false,
  horizontalStand: false,
  shortVerticalStand: false,
  head: false,
  body: false,
  leftArm: false,
  rightArm: false,
  leftLeg: false,
  rightLeg: false,
};

export default Hangman;
