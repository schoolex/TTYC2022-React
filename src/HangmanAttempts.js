import React from 'react';
import Hangman from './Hangman';

export default (attemptsLeft) => {
  let props = {
    base: attemptsLeft <= 9,
    verticalStand: attemptsLeft <=8,
    horizontalStand: attemptsLeft <=7,
    shortVerticalStand: attemptsLeft <=6,
    head: attemptsLeft <= 5,
    body: attemptsLeft <= 4,
    leftArm: attemptsLeft <= 3,
    rightArm: attemptsLeft <= 2,
    leftLeg: attemptsLeft <= 1,
    rightLeg: attemptsLeft === 0,
  };

  return <Hangman {...props} />
};
